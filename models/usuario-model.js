'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioModel = new schema ({
    nome: {type: String, required: true, trim: true, index: true},
    email: {type: String, require: true},
    senha: {type: String, required: true},
    foto: {type: String},
    ativo: {type: Boolean, required: true},
    dataCriacao: {type: Date, required: true}
})

if(!this.dataCriacao){
    let agora = new Date();
    this.dataCriacao = agora;
    next();
}

module.exports = mongoose.model('Usuario', usuarioModel);