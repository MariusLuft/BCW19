const api = require('./api')
const express = require('express')
const request = require('supertest')
const uuid = require('uuid/v4')

const initApi = () => {
    const app = express()
    app.use(api)
    return app
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
    const transaction = (bagId = uuid()) => {
        return {
            bagId: bagId,
            timestamp: '2084-04-23T18:25:43.511Z',
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

    test('it should accept a valid transaction', async () => {
        const app = initApi()
        const res = await request(app).post('/transaction').send(transaction())
        expect(res.statusCode).toEqual(201)
        expect(res.body.txId).toBeDefined
        expect(res.body.journeyId).toBeDefined
    })

    test('it should not accept an invalid transaction', async () => {
        const app = initApi()
        const res = await request(app).post('/transaction').send({})
        expect(res.statusCode).toEqual(400)
        expect(res.body.map(item => item.params.missingProperty).sort()).toEqual([
            'bagId', 'buyerId', 'measurement', 'price', 'scannerId', 'sellerId', 'timestamp'
        ].sort())
    })

    test('it should append transaction to bag journey', async () => {
        const app = initApi()
        const tx = transaction()
        const res = await request(app).post('/transaction').send(tx)
        const journey = await request(app).get('/journey/' + tx.bagId)
        expect(journey.body).toHaveLength(1)
        expect(journey.body[0]).toMatchObject(tx)
    })

    /*
    test('it should return different journey ID for the same bag when journey was reset', async () => {
        const app = initApi()
        const journeyId1 = (await request(app).post('/transaction').send(tx)).body.journeyId
        await request(app).post('/journey/' + tx.bagId + '/reset')

    })
    */

    // Create tx ID
    // Create journey ID
})