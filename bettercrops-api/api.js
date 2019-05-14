const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { Validator, ValidationError } = require('express-json-validator-middleware')

const validator = new Validator({allErrors: true})

router.use(bodyParser.json())

// Journey -------------------------------------------------------------------------------------------------------------

router.get('/journey/:bagId', (req, res) => {
    res
        .status(200)
        .json([])
})

router.post('/journey/:bagId/reset', (req, res) =>  {
    res
        .status(500)
        .json({ error: 'Not implemented' })
})

// Transaction ---------------------------------------------------------------------------------------------------------

const txSchema = {
    type: 'object',
    required: [ 'bagId', 'timestamp', 'measurement', 'price', 'sellerId', 'buyerId', 'scannerId' ],
    properties:  {
        bagId: {
            type: 'string'
        },
        timestamp: {
            type: 'string',
            format: 'date-time'
        },
        measurement: {
            type: 'object',
            required: [ 'capacity' ],
            properties: {
                capacity: {
                    type: 'number'
                }
            }
        },
        price: {
            type: 'object',
            required: [ 'amount', 'currency' ],
            properties: {
                amount: {
                    type: 'number'
                },
                currency: {
                    type: 'string'
                }
            }
        },
        sellerId: {
            type: 'string'
        },
        buyerId: {
            type: 'string'
        },
        scannerId: {
            type: 'string'
        }
    }
}

router.post('/transaction', validator.validate({ body: txSchema, jsonPointers: true }), (req, res) => {
    res
        .status(201)
        .json({
            txId: '12345',
            journeyId: '12345'
        })
})

// Quality -------------------------------------------------------------------------------------------------------------

router.put('/quality/check', (req, res) => {
    res
        .status(500)
        .json({ error: 'Not implemented' })
})

// Error handler -------------------------------------------------------------------------------------------------------

router.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.status(400).send(err.validationErrors.body)
        next()
    } else {
        next(err)
    }
})

module.exports = router
