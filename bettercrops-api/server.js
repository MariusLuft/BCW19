var express = require('express')
var api = require('./api')

var app = express()

app.use(api)

app.listen(8080, () => console.log('Server running.'))