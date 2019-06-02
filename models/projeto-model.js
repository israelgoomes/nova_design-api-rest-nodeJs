'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projetoModel = new schema({
    nomeCliente: {trim: true, required: true, type: String, index: true},
    telefone: {trim:true, requried: true, type: String},
    email: {type: String},
    rua: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true, index: true},
    tituloProjeto: {trim: true, required: true, index: true, type: String },
    descricaoProjeto: {type: String, required: true},
    foto: {type: String},
    status: {type: Boolean, required: true},
    data: {type: Date, default: new Date()}

}, {versionkey: false})

projetoModel.pre('save', next =>{
    let agora = new Date();
    if(!this.data){
        this.data = agora;

        next();
    }
})

module.exports = mongoose.model('Projetos', projetoModel);