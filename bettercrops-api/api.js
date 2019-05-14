const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const store = require('./store')
const uuid = require('uuid/v4')
const { Validator, ValidationError } = require('express-json-validator-middleware')

const validator = new Validator({allErrors: true})

router.use(bodyParser.json())

// Journey -------------------------------------------------------------------------------------------------------------

router.get('/journey/:bagId', (req, res) => {
    const currentJourneyId = store.getCurrentJourney(req.params.bagId)
    const journey = currentJourneyId ? store.findTxByJourney(currentJourneyId) : []
    res
        .status(200)
        .json(journey)
})

router.post('/journey/:bagId/finish', (req, res) =>  {
    const journeyId = store.getCurrentJourney(req.params.bagId)
    if (journeyId) {
        store.finishJourney(journeyId)
        res.status(200).send()
    } else {
        res.status(400).json({ error: 'no current journey for bag' })
    }
})

// Transaction ---------------------------------------------------------------------------------------------------------

const txSchema = {
    type: 'object',
    required: [ 'bagId', 'measurement', 'price', 'sellerId', 'buyerId', 'scannerId' ],
    properties:  {
        bagId: {
            type: 'string'
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
    const tx = req.body
    const journeyId = store.getCurrentJourney(tx.bagId)
    tx.txId = uuid()
    tx.journeyId = journeyId || uuid()
    tx.timestamp = new Date()
    store.saveTx(req.body)
    res
        .status(201)
        .json({
            txId: tx.txId,
            journeyId: tx.journeyId,
            timestamp: tx.timestamp
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
