'use strict'

var fs = require('fs')
var path = require('path')
var Sequelize = require('sequelize')
var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]
var sequelize = new Sequelize(config.pgConnectionString, {query: {raw: true,  logging: false}})
var db = {}
var Promise = require('bluebird')
var redis_options = []
var redis = Promise.promisifyAll(require('redis')).createClient(config.redis.port, config.redis.host, redis_options)
var redis_pub = Promise.promisifyAll(require('redis')).createClient(config.redis.port, config.redis.host, redis_options)
var redis_sub = Promise.promisifyAll(require('redis')).createClient(config.redis.port, config.redis.host, redis_options)

if (config.redis.password) {
  redis.authAsync(config.redis.password)
  redis_pub.authAsync(config.redis.password)
  redis_sub.authAsync(config.redis.password)
}
fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js')
  })
  .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
db.redis = redis
db.redis_pub = redis_pub
db.redis_sub = redis_sub

module.exports = db
