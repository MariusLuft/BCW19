const api = require('./api')
const express = require('express')
const request = require('supertest')

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
    test('it should accept a valid transaction', async () => {
        const app = initApi()
        const tx = {
            bagId: '09-093-938409',
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
        const res = await request(app).post('/transaction')
        expect(res.statusCode).toEqual(201)
        expect(res.body.txId).toBeDefined
        expect(res.body.journeyId).toBeDefined
    })

    // Create tx ID
    // Create journey ID
})