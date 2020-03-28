var Promise = require('bluebird')
var should = require('should')
var supertest = require('supertest')
var assert = require('assert')

var app = require(__dirname + '/../app')

describe('urlparser test: ', function () {
  it('Get url', function (done) {
    supertest(app)
      .get('/api/v1/?q=http://www.tert.am/am/news/2016/10/19/erdoghan/2167931')
      .end(function (err, res) {
        res.body.should.have.property('status', 'ok')
        done()
      })
  })
})
