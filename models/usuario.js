var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id_user: {type: Schema.Types.ObjectId, ref:'Acceso'},
    id_rol: {type: Schema.Types.ObjectId, ref:'Rol'},
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    correo: {type: String, required: true}
});

module.exports = mongoose.model('Usuario', schema);