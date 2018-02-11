var express = require('express');
var router = express.Router();
var Acceso = require('../controladores/acceso');

/* GET home page. */
router.get('/', function(req, res, next) {
    Acceso.getaccesos(req, res, next);
});

router.get('/:id', function(req, res, next) {
    Acceso.getacceso(req, res, next);
});

router.post('/', function(req, res, next) {
    Acceso.createacceso(req, res, next);
});

router.put('/:id', function(req, res, next) {
    Acceso.updateacceso(req, res, next);
});

router.delete('/:id', function(req, res, next) {
    Acceso.deleteacceso(req, res, next);
});

module.exports = router;