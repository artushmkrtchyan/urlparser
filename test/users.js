// var Promise = require('bluebird')
// var should = require('should')
// var supertest = require('supertest')
// var assert = require('assert')
//
// var app = require(__dirname + '/../app')
//
// describe('current test: ', function () {
//   var UserData = {email: 'ghevond20@gmail.com', password: '123'}
//   var AuthKey = null
//   var newUserData = {
//     email: 'test@test.com',
//     re_password: 123,
//     password: 123,
//     first_name: 'AAAA',
//     last_name: 'BBBB',
//   }
//   // var invalidUserData = {
//   //   email: 'test@tk.com',
//   //   re_password: 1231,
//   //   password: 123,
//   //   first_name: 'AAAA',
//   //   last_name: 'BBBB',
//   // }
//   // var putUserData = {
//   //   email: 'test@t11k.com',
//   // }
//   //
//   // it('User login', function (done) {
//   //   supertest(app)
//   //     .post('/api/v1/login')
//   //     .send(UserData)
//   //     .end(function (err, res) {
//   //       console.log(res.headers)
//   //       AuthKey = res.headers['x-auth-token']
//   //       console.log(AuthKey)
//   //       done()
//   //     })
//   // })
//   //
//   // it('Get Current user info', function (done) {
//   //   supertest(app)
//   //     .get('/api/v1/users/current')
//   //   //  .set({ 'x-auth-token': AuthKey })
//   //     .set('X-auth-token',  AuthKey)
//   //     .end(function (err, res) {
//   //       console.log(res.body.data)
//   //       res.body.should.have.property('status', 'ok')
//   //       done()
//   //     })
//   // })
// //
// it('User signup valid', function (done) {
//   supertest(app)
//     .post('/api/v1/users')
//     .send(newUserData)
//     .end(function (err, res) {
//       res.body.should.have.property('status', 'ok')
//       done()
//     })
// })
// //
// // it('User signup Invalid', function (done) {
// //   supertest(app)
// //     .post('/api/v1/users')
// //     .send(newUserData)
// //     .end(function (err, res) {
// //       res.body.should.have.property('status', 'error')
// //       done()
// //     })
// // })
// //
// // it('User PUT Update valid', function (done) {
// //   supertest(app)
// //     .put('/api/v1/users/18')
// //     .send(putUserData)
// //     .end(function (err, res) {
// //       res.body.should.have.property('status', 'ok')
// //       done()
// //     })
// // })
// // it('DELETE user', function (done) {
// //   supertest(app)
// //     .delete('/api/v1/users/23')
// //     .end(function (err, res) {
// //       res.body.should.have.property('status', 'ok')
// //       done()
// //     })
// // })
// // it('Post current user info', function (done) {
// //   supertest(app)
// //     .post('/api/v1/users/current')
// //     .set('cookie', 'hotels-ulc=' + AuthKey)
// //     .end(function (err, res) {
// //       res.body.should.have.property('status', 'ok')
// //       done()
// //     })
// // })
// // it('Get current user info', function (done) {
// //   supertest(app)
// //     .get('/api/v1/users/current')
// //     .end(function (err, res) {
// //       res.body.should.have.property('status', 'ok')
// //       done()
// //     })
// // })
// })
