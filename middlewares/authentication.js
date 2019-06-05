'use strict'

const jwt = require('jsonwebtoken');
const variables = require('../bin/configurations/variables');

module.exports = async(req, res, next) => {
    let token = req.body.token || req.query.query || req.headers['user-token'];
    if(token){

        try {
            //o decoded vai trazer os dados do usuario que está logado
            let decoded = await jwt.verify(token, variables.Security.secretKey);
            console.log(decoded);
            req.usuarioLogado = decoded;
            next();
        } catch (error) {
            res.status(401).send({message: 'O token informado é inválido'});
            return;
            
        }
    }else {
        res.status(401).send({message: 'Você precisa digitat um token para acessar esse recurso'});
        return;
    }
}