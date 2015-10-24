'use strict';

// Dependencies
var express = require('express');

// Controllers
var controller = require('./SearchController');

//
// ROUTING

var router = express.Router();

router.get('/', controller.Search);

module.exports = router;