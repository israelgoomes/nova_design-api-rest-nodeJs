'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const clienteModel = new schema ({
    nome: {type: String, required: true, trim: true, index: true},
    tel: {type: String, required: true},
    email: {type: String, required: true},
    cep: {type: String, required: true},
    endereco: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    dataCriacao: {type: Date, default: new Date()}


}, {versionKey: false})


clienteModel.pre('save', next => {
    let agora = new Date();
    if(!this.dataCriacao){
        this.dataCriacao = agora;
        next();
    }
})

module.exports = mongoose.model('Clientes', clienteModel);
