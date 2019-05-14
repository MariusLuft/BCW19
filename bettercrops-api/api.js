const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { Validator, ValidationError } = require('express-json-validator-middleware')

const validator = new Validator({allErrors: true})

router.use(bodyParser.json())

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

router.post('/transaction', (req, res) => {
    res
        .status(500)
        .json({ error: 'Not implemented' })
})

router.put('/quality/check', (req, res) => {
    res
        .status(500)
        .json({ error: 'Not implemented' })
})

module.exports = router
