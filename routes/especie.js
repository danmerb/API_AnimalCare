var express = require('express');
var router = express.Router();
var especieC= require('../controller/especieController');

router.get('/', especieC.getAll);

router.post('/', especieC.anniadirEspecie);

router.post('/:nombreEspecie', especieC.anniadirRaza);

router.post('/:nombreEspecie/:nombreRaza', especieC.anniadirEnfermedades);

module.exports = router;
