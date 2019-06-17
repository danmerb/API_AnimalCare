const mongoose = require('mongoose');
const OrganizacionModel = require('../models/Organizacion')

var orgaC = {};

orgaC.getAll = (function (req, res) {
    OrganizacionModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

orgaC.anniadirOrganizacion = (function (req, res) {
    var obj = new OrganizacionModel({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        direccion: req.body.direccion
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


module.exports = orgaC;