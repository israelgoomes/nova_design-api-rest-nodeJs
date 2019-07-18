"use strict";

require("../models/projeto-model");
const mongoose = require("mongoose");
//const projetos = mongoose.model("Projetos");
const dao = require("../com.novadesignDAO/projetoDAO");
const ctrlBase = require('../bin/base/controller-base');
const _repo = new dao();
const validation = require('../bin/helpers/validation');


//------------------------------- Configurações do mongoose --------------------------------------
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
//------------------------------------------------------------------------------------------------
function projetoController() {}

projetoController.prototype.get = async (req, res) => {
  ctrlBase.getAll(_repo, req, res);
};

projetoController.prototype.getById = async (req, res) => {
 ctrlBase.getById(_repo, req, res);
};

projetoController.prototype.getByClienteId = async (req, res)=> {
  try {
    let id = req.params.id;
    if (id) {
      let resultado = await _repo.getByClienteId(id);
      res.status(200).send(resultado);
    }else {
      res.status(400).send({ message: 'Informe o id do projeto', validation: {} });
    }
  } catch (err) {
    console.log("Get por ID com erro, motivo: ", err);
    res.status(500).send({ message: "Erro no processamento Aqui!!!!!!", error: err });
  }
}

projetoController.prototype.post = async (req, res) => {
  let _ValidationContract = new validation();

  //_ValidationContract.isRequired(req.body.nomeCliente, 'Digite o nome do cliente');
  //_ValidationContract.isRequired(req.body.tel, 'Digite um número de telefone');
  //_ValidationContract.isRequired(req.body.endereco, 'Digite a rua');
  //_ValidationContract.isRequired(req.body.bairro, 'Digite o bairro');
  //_ValidationContract.isRequired(req.body.cidade, 'Digite a cidade');
  _ValidationContract.isRequired(req.body.tituloProjeto, 'Digite o titulo do projeto');
  _ValidationContract.isRequired(req.body.descricaoProjeto, 'Escreva uma breve descrição do projeto');
  //_ValidationContract.isRequired(req.body.cep, 'Cep Obrigatório');
  _ValidationContract.isRequired(req.body.cliente, 'Selecione o cliente do projeto')



 ctrlBase.post(_repo, _ValidationContract, req, res);
};

projetoController.prototype.put = async(req, res) => {
  let _ValidationContract = new validation();

  _ValidationContract.isRequired(req.body.nomeCliente, 'Digite o nome do cliente');
  _ValidationContract.isRequired(req.body.tel, 'Digite um número de telefone');
  _ValidationContract.isRequired(req.body.endereco, 'Digite a rua');
  _ValidationContract.isRequired(req.body.bairro, 'Digite o bairro');
  _ValidationContract.isRequired(req.body.cidade, 'Digite a cidade');
  _ValidationContract.isRequired(req.body.tituloProjeto, 'Digite o titulo do projeto');
  _ValidationContract.isRequired(req.body.descricaoProjeto, 'Escreva uma breve descrição do projeto');

 ctrlBase.put(_repo, _ValidationContract, req, res);
};

projetoController.prototype.delete = async (req, res) => {
 ctrlBase.delete(_repo, req, res);
};

module.exports = projetoController;
