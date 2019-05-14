const api = require('./api')
const express = require('express')
const request = require('supertest')
const uuid = require('uuid/v4')

const initApi = () => {
    const app = express()
    app.use(api)
    return app
}

const transaction = (bagId = uuid()) => {
    return {
        bagId: bagId,
        measurement: {
            capacity: 1837
        },
        price: {
            amount: 100.32,
            currency: 'USD'
        },
        sellerId: '0298/3847390',
        buyerId: '0293/2983749',
        scannerId: '39300-3948-38'
    }
}

describe('GET /journey/:bagId', () => {
    test('it should return an empty journey for an unknown bag', async () => {
        const app = initApi()
        const res = await request(app).get('/journey/123')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual([])
    })
})

describe('POST /transaction', () => {
    test('it should accept a valid transaction', async () => {
        const app = initApi()
        const res = await request(app).post('/transaction').send(transaction())
        expect(res.statusCode).toEqual(201)
        expect(res.body.txId).toBeDefined()
        expect(res.body.journeyId).toBeDefined()
        expect(res.body.timestamp).toBeDefined()
    })

    test('it should not accept an invalid transaction', async () => {
        const app = initApi()
        const res = await request(app).post('/transaction').send({})
        expect(res.statusCode).toEqual(400)
        expect(res.body.map(item => item.params.missingProperty).sort()).toEqual([
            'bagId', 'buyerId', 'measurement', 'price', 'scannerId', 'sellerId'
        ].sort())
    })

    test('it should start a new bag journey and set tx metadata', async () => {
        const app = initApi()
        const tx = transaction()
        await request(app).post('/transaction').send(tx)
        const journey = await request(app).get('/journey/' + tx.bagId)
        expect(journey.body).toHaveLength(1)
        expect(journey.body[0]).toMatchObject(tx)
        expect(journey.body[0].txId).toBeDefined()
        expect(journey.body[0].journeyId).toBeDefined()
        expect(journey.body[0].timestamp).toBeDefined()
    })

    test('it should append to the current bag journey', async () => {
        const app = initApi()
        const bagId = uuid()
        const tx1 = transaction(bagId)
        const tx2 = transaction(bagId)
        await request(app).post('/transaction').send(tx1)
        await request(app).post('/transaction').send(tx2)
        const journey = await request(app).get('/journey/' + bagId)
        expect(journey.body).toHaveLength(2)
        expect(journey.body[0]).toMatchObject(tx1)
        expect(journey.body[1]).toMatchObject(tx2)
    })
})

describe('POST /journey/:bagId/finish', () => {
    test('it should start a new bag journey on next transaction', async () => {
        const app = initApi()
        const bagId = uuid()
        const tx1 = transaction(bagId)
        const tx2 = transaction(bagId)
        const res1 = await request(app).post('/transaction').send(tx1)
        const reset = await request(app).post('/journey/' + bagId + '/finish')
        expect(reset.statusCode).toBe(200)
        const res2 = await request(app).post('/transaction').send(tx2)
        const journey = await request(app).get('/journey/' + bagId)
        expect(journey.body).toHaveLength(1)
        expect(journey.body[0]).toMatchObject(tx2)
    })
})