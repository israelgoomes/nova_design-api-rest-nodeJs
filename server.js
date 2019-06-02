'use strict'

const app = require('./bin/express');
const variables = require('../nova_design-api-rest-nodeJs/bin/configurations/variables');

app.listen(variables.Api.port, () =>{
    console.info("Api Nova Design inicializado com sucesso!");
});