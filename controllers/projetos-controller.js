'use strict'

require('../models/projeto-model');
const mongoose = require('mongoose');
const projetos = mongoose.model('Projetos')
const dao = require('../com.novadesignDAO/projetoDAO');


mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

function projetoController(){

}


projetoController.prototype.get = async(req, res) => { 
    let buscar = await new dao().getAll();
    res.status(200).send(buscar);
};

projetoController.prototype.getById = async(req, res) => {
    let buscarporId = await new dao().getById(req.params.id);
    res.status(200).send(buscarporId);
 };

projetoController.prototype.post = async(req, res) => {
  let resultado = await new dao().create(req.body)
    res.status(201).send(resultado);

 };

projetoController.prototype.put = async(req, res) => { 
  let projetoEncontrado = await new dao().update(req.params.id, req.body);
    res.status(202).send(projetoEncontrado);

};

projetoController.prototype.delete = async(req, res) => {
    let excluir = await new dao().delete(req.params.id)
    res.status(204).send(excluir);
 };


module.exports = projetoController;