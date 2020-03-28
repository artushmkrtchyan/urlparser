var express = require('express')
var router = express.Router()

var app = module.exports = express()

var index = require('./index')

app.use('*', function (req, res, next) {
  res.header('Pragma', 'no-cache')
  res.header('Cache-Control', 'no-cache')
  res.header('Expires', '-1')
  res.header('x-auth-token', req.headers['x-auth-token'])
  next()
})

app.use('/', index)

