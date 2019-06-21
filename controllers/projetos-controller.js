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

projetoController.prototype.post = async (req, res) => {
  let _ValidationContract = new validation();

  _ValidationContract.isRequired(req.body.nomeCliente, 'Digite o nome do cliente');
  _ValidationContract.isRequired(req.body.telefone, 'Digite um número de telefone');
  _ValidationContract.isRequired(req.body.rua, 'Digite a rua');
  _ValidationContract.isRequired(req.body.bairro, 'Digite o bairro');
  _ValidationContract.isRequired(req.body.cidade, 'Digite a cidade');
  _ValidationContract.isRequired(req.body.tituloProjeto, 'Digite o titulo do projeto');
  _ValidationContract.isRequired(req.body.descricaoProjeto, 'Escreva uma breve descrição do projeto');
  _ValidationContract.isRequired(req.body.cep, 'Cep Obrigatório');



 ctrlBase.post(_repo, _ValidationContract, req, res);
};

projetoController.prototype.put = async(req, res) => {
  let _ValidationContract = new validation();

  _ValidationContract.isRequired(req.body.nomeCliente, 'Digite o nome do cliente');
  _ValidationContract.isRequired(req.body.relefone, 'Digite um número de telefone');
  _ValidationContract.isRequired(req.body.rua, 'Digite a rua');
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
