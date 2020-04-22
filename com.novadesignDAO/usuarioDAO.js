"use strict";

require("../models/usuario-model");
const base = require("../bin/base/DAO-base");
const md5 = require("md5");

class usuarioDao {
  constructor() {
    this._base = new base("Usuario");
    this._projection = "nome email _id" ;
  }

  //verifica se o email informado já existe
  async isEmailExiste(Email) {
    return await this._base._model.findOne({ email: Email }, this._projection);
  }
  //faz a autenticação do login
  async authenticate(Email, Senha) {
    let _hashSenha = (Senha);
    return await this._base._model.findOne({email: Email, senha: _hashSenha}, "nome email _id");
  }


  //-------  C R U D -----------------------------------
  async getAll() {
    return await this._base._model.find({}, "nome email _id foto");
  }

  async getById(id) {
    return await this._base._model.findById(id, "nome email _id foto dataCriacao");
  }

  async create(data) {
    let usuarioCriado = await this._base.create(data);
    return this._base._model.findById(usuarioCriado._id, this._projection);
  }

  async update(id, data) {
    console.log('dados antes', data)
    let usuarioAtualizado = await this._base.update(id, {
      nome: data.nome,
      email: data.email,
      foto: data.foto
    });
    //console.log('User atualizado', usuarioAtualizado)
    return this._base._model.findById(usuarioAtualizado._id, this._projection);
  }

  async delete(id) {
    return await this._base.delete(id);
  }
}

module.exports = usuarioDao;
