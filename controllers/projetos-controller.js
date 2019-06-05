"use strict";

require("../models/projeto-model");
const mongoose = require("mongoose");
const projetos = mongoose.model("Projetos");
const dao = require("../com.novadesignDAO/projetoDAO");
const ctrlBase = require('../bin/base/controller-base');
const _repo = new dao();
const validation = require('../bin/helpers/validation');

mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

function projetoController() {}

projetoController.prototype.get = async (req, res) => {
  ctrlBase.getAll(_repo, req, res);
};

projetoController.prototype.getById = async (req, res) => {
 ctrlBase.getById(_repo, req, res);
};

projetoController.prototype.post = async (req, res) => {
  let _ValidationContract = new validation();

 ctrlBase.post(_repo, _ValidationContract, req, res);
};

projetoController.prototype.put = async (req, res) => {
  let _ValidationContract = new validation();

 ctrlBase.put(_repo, _ValidationContract, res, res);
};

projetoController.prototype.delete = async (req, res) => {
 ctrlBase.delete(_repo, req, res);
};

module.exports = projetoController;
