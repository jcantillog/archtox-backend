var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    key_pass: {type: String, required: true}
});

module.exports = mongoose.model('Acceso', schema);