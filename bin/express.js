const express = require('express');
const bodyParser = require('body-parser');

const projetosRouter = require('../routes/projeto-routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/projetos', projetosRouter);

module.exports = app;