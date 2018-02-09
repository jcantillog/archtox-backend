var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nombre_grupo: {type: String, required: true}
});

module.exports = mongoose.model('Grupo_farmaco', schema);