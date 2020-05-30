var express = require('express');
var router = express.Router();
var userControllers=require('../controllers/user');

router.get('/best', userControllers.showList);

module.exports = router;
