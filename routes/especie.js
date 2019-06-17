var express = require('express');
var router = express.Router();
var especieC= require('../controller/especieController');

router.get('/', especieC.getAll);

router.get('/:nombreEspecie', especieC.getEspecie);

router.get('/:nombreEspecie/:nombreRaza', especieC.getRaza);

router.post('/', especieC.anniadirEspecie);

router.post('/:nombreEspecie', especieC.anniadirRaza);

router.post('/:nombreEspecie/Enfermedad/:nombreRaza', especieC.nuevaEnfermedad);

router.post('/:nombreEspecie/Alimentacion/:nombreRaza', especieC.nuevaAlimentacion);

module.exports = router;
