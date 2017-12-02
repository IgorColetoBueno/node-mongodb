var express = require('express');
var router = express.Router();
var service = require('./../services/cars');

router.get('/',service.find);
router.get('/new',service.new);
router.get('/edit/:id', service.edit);
router.get('/delete/:id', service.delete);
module.exports = router;