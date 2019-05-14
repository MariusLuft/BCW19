var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

app.put('/quality/check', (req, res) => {
    res.send('Good quality')
})

app.get('/journey/:bagId', (req, res) => {
    res.send('The Journey of: ' + req.params.bagId)
})

app.post('/journey/:bagId/reset', (req, res) =>  {
    res.send('Journey of: ' + req.params.bagId + ' reset')
})

app.post('/transaction', (req, res) => {
    res.send('Transaction created')
})

app.listen(3000, () => console.log('Server running.'))