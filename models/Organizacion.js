var mongoose= require('mongoose');
var Schema = mongoose.Schema;


const organizacionSchema= new Schema({
    nombre: String,
    telefono:String,
    direccion: String
})
module.exports= mongoose.model('organizacion',organizacionSchema);