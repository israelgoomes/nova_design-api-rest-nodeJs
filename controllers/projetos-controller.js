'use strict'

function projetoController(){

}


projetoController.prototype.get = async(req, res) => { 

    res.status(200).send("Funcionando ....");
};

projetoController.prototype.getById = async(req, res) => {

    res.status(200).send(`O id passado foi: ${req.params.id}`);
 };

projetoController.prototype.post = async(req, res) => { };

projetoController.prototype.put = async(req, res) => { };

projetoController.prototype.delete = async(req, res) => { };


module.exports = projetoController;