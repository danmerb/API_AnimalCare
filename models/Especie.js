var mongoose= require('mongoose');
var Schema = mongoose.Schema;


const EspecieSchema= new Schema({
    nombreEspecie: String,
    tipsAseo: [
        {
            descripccionTip: String
        }
    ],
    raza : [
        {
            nombreRaza: String,
            descripcion: String,
            alimentacion: [
                {
                    peso: String,
                    cantidadDevecesAlDia:String
                }
            ],
            enfermedades: [
                {
                    nombreEnfermedad: String,
                    descripccionEnfermedad: String
                }
            ]
        }
    ]
})
module.exports= mongoose.model('equipo',EspecieSchema);
