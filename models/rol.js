var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nombre: {type: String, required: true}
});

module.exports = mongoose.model('Rol', schema);