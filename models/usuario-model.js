'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
//Modelo da tabela e colunas, sendo required = obrigatório, trim = não deixa existir espaços no começo ou fim do valor, index = cria um índice para facilitar a busca.
const usuarioModel = new schema ({
    nome: {type: String, required: true, trim: true, index: true},
    email: {type: String, require: true},
    senha: {type: String, required: true},
    foto: {type: String},
    ativo: {type: Boolean},
    dataCriacao: {type: Date, default: new Date()}
}, {versionKey: false})


usuarioModel.pre('save', next =>{
    let agora = new Date();
if(!this.dataCriacao){
    this.dataCriacao = agora;
    next();
}
})
module.exports = mongoose.model('Usuario', usuarioModel);