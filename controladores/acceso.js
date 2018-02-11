var acceso_model = require('../models/acceso');

exports.createacceso = function (req, res, next) {
    var acceso = new acceso_model(req.body);
        acceso.save(function (err, acceso) {
            if(err){
                return res.status(500).send('problem to save acceso '+err);
            }
            return res.status(200).send(acceso)});

};

exports.getaccesos = function (req, res, next) {
    acceso_model.find({}, function (err, acceso) {
        if(err){
            return  res.send('problem to get acceso '+err);
        }
        if(!acceso){
            return  res.send('Access not found');
        }
        res.send(acceso);
    });
};

exports.getacceso = function (req, res, next) {
    acceso_model.findById(req.params.id, function (err, acceso) {
        if(err){
            return  res.send('problem to get acceso '+err);
        }
        if(!acceso){
            return  res.send('acceso not found');
        }
        res.send(acceso);
    })
};

exports.updateacceso = function (req, res, next) {
    acceso_model.findOneAndUpdate({_id: req.params.id},req.body, function (err, acceso) {
        if(err){
            return  res.send('problem to update acceso '+err);
        }
        if(!acceso){
            return  res.send('acceso not found');
        }
        res.send(acceso);
    });

};

exports.deleteacceso = function (req, res, next) {
    acceso_model.findByIdAndRemove(req.params.id ,function (err, acceso) {
        if(err){
            return  res.status(500).send('problem to delete acceso '+err);
        }
        if(!acceso){
            return   res.status(500).send('acceso not found');
        }
        res.status(200).send(acceso)
    });

};