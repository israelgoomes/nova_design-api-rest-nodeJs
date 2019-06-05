"use strict";

const mongoose = require("mongoose");

class daoBase {
  constructor(model) {
    this._model = mongoose.model(model);
  }
// ------------------- C R U D --------------------
  async getAll() {
    return await this._model.find();
  }

  async getById(id) {
    return await this._model.findById(id);
  }

  async create(data) {
    let modelo = new this._model(data);
    let resultado = modelo.save();
    return resultado;
  }

  async update(id, data) {
    await this._model.findByIdAndUpdate(id, { $set: data });
    let resultado = await this._model.findById(id);
  }

  async delete(id) {
    return await this._model.findByIdAndRemove(id);
  }
}
module.exports = daoBase;
