var express = require('express');
var router = express.Router();

var UserController = require('../lista.json')

router.get('/', UserController.getUsers)

module.exports = router;