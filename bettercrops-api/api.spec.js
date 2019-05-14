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