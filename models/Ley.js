var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const leyesSchema = new Schema({
    
    nombre_ley: {
        type: String
    },
    descripcion_ley: {
        type: String
    }
})
module.exports = mongoose.model('leyes', leyesSchema);