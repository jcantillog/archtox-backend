var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id_farmaco: {type: Schema.Types.ObjectId, ref:'Farmaco'},
    nombre: {type: String, required: true}
});

module.exports = mongoose.model('Grupo_farmaco', schema);