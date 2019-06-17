const mongoose = require('mongoose');
const leyModel = require('../models/Ley')

var leyC = {};

leyC.getAll = (function (req, res) {
    leyModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

leyC.anniadirLey = (function (req, res) {
    var obj = new leyModel({
        nombre_ley: req.body.nombre_ley,
        descripcion_ley: req.body.descripcion_ley
    });
    obj.save(function (err) {
        if (err) {
            res.status(500).json({ status: 500, err })
        } else {
            console.log('Se registro con exito');
            res.status(200).json(obj);
        }
    })

})


module.exports = leyC;