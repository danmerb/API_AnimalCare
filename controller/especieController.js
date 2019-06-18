const mongoose = require('mongoose');
const especieModel = require('../models/Especie')

var especieC = {};

especieC.getAll = (function (req, res) {
    especieModel.find({}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            console.log('Data obtenidad con exito')
            res.status(200).json(datos);
        }
    })
})

especieC.getEspecie = (function (req, res) {
    especieModel.find({nombreEspecie: req.params.nombreEspecie}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

especieC.getRaza = (function (req, res) {
    especieModel.findOne({nombreEspecie: req.params.nombreEspecie, raza: {$elemMatch: {nombreRaza: req.params.nombreRaza}}}, function (err, datos) {
        if (err) {
            res.status(500).json({ status: 500, err });
        } else {
            res.status(200).json(datos);
        }
    })
})

especieC.anniadirEspecie = (function (req, res) {
    var obj = new especieModel({
        nombreEspecie: req.body.nombreEspecie,
        tipsAseo:[],
        raza:[]
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

especieC.anniadirRaza = (function (req, res) {
    var nombreEspecie = req.params.nombreEspecie;
    var obj = {
        nombreRaza: req.body.nombreRaza,
        descripcion: req.body.descripcion,
        alimentacion: [],
        enfermedades: []
    };
    especieModel.findOneAndUpdate(
        {nombreEspecie: nombreEspecie},
        {
            $push: {
                raza: obj
            }
        },
        { safe: true, upsert: true, new: true },
        function (err, model) {
            if (err) {
                res.status(500).json({ msj: 'No se pudo insertar ', err, status: 500 });
            } else {
                res.status(200).json({ status: 200, model });
            }
        }
    );
});

especieC.nuevaEnfermedad = (function (req, res) {
    var nombreRaza = req.params.nombreRaza;
    var obj={
        nombreEnfermedad : req.body.nombreEnfermedad,
        descripccionEnfermedad : req.body.descripccionEnfermedad
    }
    especieModel.update(
        {nombreEspecie: req.params.nombreEspecie, raza: {$elemMatch: {nombreRaza: nombreRaza}}},
        {
            $push: {
                'raza.$.enfermedades' : obj
            }
        },
        { safe: true, upsert: true, new: true },
        function (err, model) {
            if (err) {
                res.status(500).json({ msj: 'No se pudo insertar ', err, status: 500 });
            } else {
                res.status(200).json({ status: 200, model });
            }
        }
    );
});

especieC.nuevaAlimentacion = (function (req, res) {
    var nombreRaza = req.params.nombreRaza;
    var obj={
        peso : req.body.peso,
        cantidadDevecesAlDia : req.body.cantidadDevecesAlDia
    }
    especieModel.update(
        {nombreEspecie: req.params.nombreEspecie, raza: {$elemMatch: {nombreRaza: nombreRaza}}},
        {
            $push: {
                'raza.$.alimentacion' : obj
            }
        },
        { safe: true, upsert: true, new: true },
        function (err, model) {
            if (err) {
                res.status(500).json({ msj: 'No se pudo insertar ', err, status: 500 });
            } else {
                res.status(200).json({ status: 200, model });
            }
        }
    );
});
/*
userC.deletear = (function (req, res) {
    //console.log(req);
    var id = req.params.id;
    userModel.findByIdAndDelete(id, function (err, eliminado) {
        if (err) {
            res.status(500).json({ msj: 'No se pudo eliminar ', err, status: 500 });
        } else {
            res.status(200).json({ status: 200, eliminado });
        }
    })
});
*/

module.exports = especieC;
