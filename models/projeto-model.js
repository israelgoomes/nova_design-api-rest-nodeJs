'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projetoModel = new schema({
    //nomeCliente: {trim: true, required: true, type: String, index: true},
    //tel: {trim:true, requried: true, type: String},
    //email: {type: String},
    //endereco: {type: String, required: true},
    //bairro: {type: String, required: true},
    //cidade: {type: String, required: true, index: true},
    tituloProjeto: {trim: true, required: true, index: true, type: String },
    descricaoProjeto: {type: String, required: true},
    //cep: {type: String, required: true},
    preco: {type: String},
    foto: {type: Array},
    status: {type: Boolean, default: true},
    data: {type: Date, default: new Date()},
    usuario: {type: schema.Types.ObjectId, ref: 'Usuario'},
    cliente: {type: schema.Types.ObjectId, ref: 'Clientes'}

}, {versionkey: false})

projetoModel.pre('save', next =>{
    let agora = new Date();
    if(!this.data){
        this.data = agora;
    }
        next();
    
})

module.exports = mongoose.model('Projetos', projetoModel);