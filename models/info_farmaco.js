var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id_farmaco: {type: Schema.Types.ObjectId, ref:'Farmaco'},
    tratamiento: {type: String, required: true},
    eliminacion: {type: String, required: true},
    paciente: {type: String, required: true},
    absorcion: {type: String, required: true},
    terapia: {type: String, required: true}
});

module.exports = mongoose.model('Info_farmaco', schema);