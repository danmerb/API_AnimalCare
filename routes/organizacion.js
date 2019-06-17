var express = require('express');
var router = express.Router();
var orgaC= require('../controller/organizacionController');

router.get('/', orgaC.getAll);

router.post('/', orgaC.anniadirOrganizacion);

module.exports = router;
