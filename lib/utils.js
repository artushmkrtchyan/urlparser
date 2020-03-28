var Promise = require('bluebird')
var models = require('../models')
var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]
var cheerio = require("cheerio")
var image_downloader = require('image-downloader')
var request = require('request')
var http = require("http")
var fs = require("fs")

function returnMetakeyValue(metaKeys, text){
  var meta = '';
  return Promise.map(Object.keys(metaKeys), function(key){
    if(meta === ''){
      meta = text(metaKeys[key]).attr('content')
      if(metaKeys[key] === 'title'){
        meta = text('head > title').text()
      }
      if(metaKeys[key] === 'img'){
        meta = text('img').attr("src")
      }
    }
  }).then(function(){
    return meta
  })
}

function getPageMeta(htmlString){

  var  metaTitle = ['meta[property="og:title"]','meta[name="twitter:title"]','meta[itemprop="name"]' ,'title']
  var  metaDesc = ['meta[property="og:description"]','meta[name="twitter:description"]', 'meta[name="twitter:description"]', 'meta[name="description"]']
  var  metaImage = ['meta[property="og:image"]', 'meta[name="twitter:image"]', 'meta[itemprop="image"]', 'img']

  var text = cheerio.load(htmlString);
  var meta = {}

  return returnMetakeyValue(metaTitle, text).then(function(title){
      meta.title = title
      return returnMetakeyValue(metaDesc, text)
  }).then(function(description){
      meta.description = description
      return returnMetakeyValue(metaImage, text)
  }).then(function(image){
      meta.image = image
      return downloadImageUrl(image)
  }).then(function(image_path){
      meta.image_path = image_path
      console.log(meta.image_path, '555555555555555555')
      return meta
  }).catch(function (err) {
      console.log(err)
      res.render('error', {message: 'Page Not Found', error: {status: '404 error'}})
  })

}

function downloadImageUrl(url){

  var image_name = Math.random() + '-' + url.match(/(\w|-)+\.\w+$/)[0]
  var path = "image/download/"+image_name

  return new Promise(function (resolve, reject) {
  request.get({url: url}, function (err, res, body) {
      if(err){
        console.log(err)
      }
      http.get(url, function(res) {
        res.pipe(fs.createWriteStream(path))
        res.on('end', function() {
        return resolve(path)
      })
      })
  })
})

  // return new Promise(function (resolve, reject) {
  //   request.get({url: url}, function (err, res, body) {
  //       if(err){
  //         console.log(err)
  //       }
  //       http.get(url, function(res) {
  //         res.pipe(fs.createWriteStream(path))
  //       })
  //   })
  //   return resolve(path)
  // })

// return new Promise(function (resolve, reject) {
//   return resolve(path)
// }).then(function(path){
//       http.get(url, function(res) {
//         res.pipe(fs.createWriteStream(path))
//       })
//       return path
//     })

}

module.exports = {
  getPageMeta: getPageMeta,
  downloadImageUrl: downloadImageUrl
}
