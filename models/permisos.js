var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id_recurso: {type: Schema.Types.ObjectId, ref:'Recurso'},
    id_rol: {type: Schema.Types.ObjectId, ref:'Rol'}
});

module.exports = mongoose.model('Permiso', schema);