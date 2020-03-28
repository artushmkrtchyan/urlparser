var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var API_VERSIONS = {'Production': '/v1'}
var env = process.env.NODE_ENV || 'development'
var app = express()

require('events').EventEmitter.defaultMaxListeners = Infinity

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.set('json spaces', 3)
// uncomment after placing your favicon in /public
// if (env === 'development') {
// }
app.use(bodyParser.urlencoded({limit: '50mb',extended: false}))
app.use(bodyParser.json({limit: '50mb'}))


app.use(express.static(path.join(__dirname, 'public')))






//app.use(passport.authenticate('http-header-token'))
//app.use(passport.session()) // for oaoth1 - twitter

app.use(function (req, res, next) {
  // req.i18n.setLocaleFromCookie()
  // req.i18n.setLocaleFromQuery(req)
  // Website you wish to allow to connect
  if (req.headers['origin'] && req.headers['origin'].indexOf('yandex') !== -1) {
    res.setHeader('Access-Control-Allow-Origin', req.headers['origin'])
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*')
  }
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})


// API ROUTES (versioned) routes go in the routes/ directory
for (var k in API_VERSIONS) {
  app.use('/api' + API_VERSIONS[k], require('./routes/' + API_VERSIONS[k]))
}


console.log('* * * STARTING * * * ', new Date())

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  console.log('Error 404: ' + req.originalUrl)
  err.status = 404
  res.render('error', {message: 'Page Not Found', ScriptConf: ScriptConf, error: {status: '404'}})
})

// production error handler
// no stacktraces leaked to user
// app.use(ErrorReporting)

module.exports = app
