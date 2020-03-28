var express = require('express')
var router = express.Router()
var models = require('../models')
var env = process.env.NODE_ENV || 'development'
var config = require(__dirname + '/../config/config.json')[env]
var Promise = require('bluebird')
var rp = require('request-promise')
var md5 = require('md5')
var utils = require("../lib/utils")

/* GET home page. */
router.get('/', function (req, res, next) {
	var scanUrl = req.query.q
	var hash = md5(scanUrl)
	return models.Meta.findOne({where:{url_hash: hash}}).then(function(result){
		if(result){
			 return res.json({status:'ok', data:result})
		}
		return rp(scanUrl)
			.then(function (htmlString) {
				return utils.getPageMeta(htmlString)
			}).then(function(meta){
				var newMeta = {
					url_hash: hash,
					url: scanUrl,
					image: meta.image,
					title: meta.title,
					description: meta.description,
					image_path: meta.image_path
				}
				return models.Meta.create(newMeta)
			}).then(function(result){
			  return res.json({status:'ok', data:result})
			})

	}).catch(function (err) {
	    console.log(err)
	    res.render('error', {message: 'Page Not Found', error: {status: '404 error'}})
	    //return res.json({status: 'error'})
	})
})

module.exports = router