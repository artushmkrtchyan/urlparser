var restlib = require('../lib')
var constants = require('../lib/constants')
var models = require('../models');
var Promise = require('bluebird');


function parseRequestParams(req) {
	var defaults = {
		"offset": 0,
		"limit" : 10
	}

	if( req.query ) {
		for(var propt in req.query){
			if( propt == "limit" || propt == "offset" ) {
				defaults[propt] = parseInt(req.query[propt]) || 0;
			}else{
				defaults[propt] = req.query[propt];
			}
		}
	}
	return defaults
}

function apiLogger(message, message_domain){
	if( message_domain == constants.MESSAGE_DOMAINS_AUTHCHECK ){
		//return;
	}

	console.log(message);
	return;

	switch(message_domain) {
		case constants.MESSAGE_DOMAINS_AUTHCHECK:
			//console.log(message)
			break
		case constants.MESSAGE_DOMAINS_WALLGENERATION:
			console.log(message)
			break
		case constants.MESSAGE_DOMAINS_POSTROUTER:
			//console.log(message)
			break
		case constants.MESSAGE_DOMAINS_APIEVENTS:
			console.log(message)
			break
		case constants.MESSAGE_DOMAINS_COMMENTROUTER:
			//console.log(message)
			break
		case constants.MESSAGE_DOMAINS_INTERESTROUTER:
			//console.log(message)
			break
		case constants.MESSAGE_DOMAINS_LOVEINTERESTROUTER:
			//console.log(message)
			break
		case constants.MESSAGE_DOMAINS_THUMBSROUTER:
			console.log(message)
			break
		case constants.MESSAGE_DOMAINS_USERROUTER:
			console.log(message)
			break
		default:
			//console.log(message)
	}
}


function validateUrl(url) {
	var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	return regexp.test(url);
}

function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}


module.exports = {
    parseRequestParams:parseRequestParams,
    apiLogger:apiLogger,
    validateUrl:validateUrl,
    validateEmail:validateEmail,
}
