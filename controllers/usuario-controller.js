'use strict'

const ctrlBase = require('../bin/base/controller-base');
const dao = require('../com.novadesignDAO/usuarioDAO');
const validation = require('../bin/helpers/validation');
const _repo = new dao();
function usuarioController(){

}

usuarioController.prototype.get = async (req, res) =>{
    ctrlBase.getAll(_repo, req, res);
}

usuarioController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
}

usuarioController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    
   _validationContract.isRequired(req.body.nome, 'Informe seu nome');
   _validationContract.isRequired(req.body.email, 'Informe seu e=mail');
   _validationContract.isEmail(req.body.email, 'Email inválido');
   _validationContract.isRequired(req.body.senha, 'Senha obrigatória');
   _validationContract.isRequired(req.body.senhaConfirmacao, 'Senha de confirmacao obrigatória');
   _validationContract.isTrue(req.body.senha == req.body.senhaConfirmacao, 'As senha não coincidem' );
   
   let usuarioIsEmailExiste = _repo.isEmailExiste(req.body.email);
   if(usuarioIsEmailExiste){
       _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined), `Já existe o e-mail ${req.body.email} na nossa base da dados`);
   }
    req.body.senha = md5(req.body.senha);
    ctrlBase.post(_repo, _validationContract, req, res);
}

usuarioController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu email');
    _validationContract.isEmail(req.body.email, 'Email inválido');
    _validationContract.isRequired(req.params.id, 'Infrome o id do usuário que será editado');

    let usuarioIsEmailExiste = _repo.isEmailExiste(req.body.email);
    if(usuarioIsEmailExiste){
        _validationContract.isTrue((usuarioIsEmailExiste.nome != undefined) && (usuarioIsEmailExiste._id != req.params.id), `Já existe o email ${req.body.email} cadastrado na nossa base da dados`);
    }
    ctrlBase.put(_repo, _validationContract, req, res);
}

usuarioController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
}

module.exports = usuarioController;