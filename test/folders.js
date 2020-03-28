// var Promise = require('bluebird')
// var should = require('should')
// var supertest = require('supertest')
// var assert = require('assert')
//
// var app = require(__dirname + '/../app')
//
// describe('File Manager test: ', function () {
//   var folderData = {
//     parentId: 0,
//     folderName: 'newTest',
//   }
//   var updateData = {
//     folderId: 11,
//     folderName: 'aaa'
//   }
//
//   it('Create Folder', function (done) {
//     supertest(app)
//       .post('/api/v1/folders/')
//       .send(folderData)
//       .end(function (err, res) {
//         res.body.should.have.property('status', 'ok')
//         done()
//       })
//   })
//
//   it('update Folder', function (done) {
//     supertest(app)
//       .put('/api/v1/folders/')
//       .send(updateData)
//       .end(function (err, res) {
//         res.body.should.have.property('status', 'ok')
//         done()
//       })
//   })
//   //
//   it('Get folder List', function (done) {
//     supertest(app)
//       .get('/api/v1/folders')
//       .end(function (err, res) {
//         res.body.should.have.property('status', 'ok')
//         done()
//       })
//   })
//   it('Get folder info by ID', function (done) {
//     supertest(app)
//       .get('/api/v1/folders/12')
//       .end(function (err, res) {
//         res.body.should.have.property('status', 'ok')
//         done()
//       })
//   })
//
//   it('Delete folder by ID', function (done) {
//     supertest(app)
//       .delete('/api/v1/folders/12')
//       .end(function (err, res) {
//         res.body.should.have.property('status', 'ok')
//         done()
//       })
//   })
// })
