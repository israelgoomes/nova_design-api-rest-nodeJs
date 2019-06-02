const express = require('express');
const bodyParser = require('body-parser');
const variables = require('../bin/configurations/variables');
const projetosRouter = require('../routes/projeto-routes');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//conexao
mongoose.connect(variables.Database.connection);

app.use('/api/projetos', projetosRouter);

module.exports = app;