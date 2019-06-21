'use strict'

require('../models/clientes-model');
const dao = require('../com.novadesignDAO/clienteDAO');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new dao();
const validation = require('../bin/helpers/validation');

function clienteController(){ }

clienteController.prototype.get = async (req, res) =>{
ctrlBase.getAll(_repo, req, res);
}

clienteController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
}

clienteController.prototype.post = async(req, res) =>{
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'Digite o nome do cliente');
    _validationContract.isRequired(req.body.tel, 'Digite pelo menos um telefone');
    _validationContract.isRequired(req.body.email, 'Email Obrigatório');
    _validationContract.isEmail(req.body.email, 'Email inválido');
    _validationContract.isRequired(req.body.cep, 'Digite o cep');
    _validationContract.isRequired(req.body.endereco, 'Digite o endereço');
    _validationContract.isRequired(req.body.bairro, 'Digite o bairro');
    _validationContract.isRequired(req.body.cidade, 'Digite a Cidade');
    _validationContract.isRequired(req.body.estado, 'Digite o Estado');

    ctrlBase.post(_repo, _validationContract, req, res);
}

clienteController.prototype.put = async(req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Digite o nome do cliente');
    _validationContract.isRequired(req.body.tel, 'Digite pelo menos um telefone');
    _validationContract.isRequired(req.body.email, 'Email Obrigatório');
    _validationContract.isEmail(req.body.email, 'Email inválido');
    _validationContract.isRequired(req.body.cep, 'Digite o cep');
    _validationContract.isRequired(req.body.endereco, 'Digite o endereço');
    _validationContract.isRequired(req.body.bairro, 'Digite o bairro');
    _validationContract.isRequired(req.body.cidade, 'Digite a Cidade');
    _validationContract.isRequired(req.body.estado, 'Digite o Estado');

    ctrlBase.put(_repo, _validationContract, req, res);
}

clienteController.prototype.delete = async (req, res) => {
        ctrlBase.delete(_repo, req, res);
}

module.exports = clienteController;