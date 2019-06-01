'use strict'

const app = require('./bin/express');
const variables = require('../NovaDesign_api/bin/configurations/variables');

app.listen(variables.Api.port, () =>{
    console.info("Api Nova Design inicializado com sucesso!");
});