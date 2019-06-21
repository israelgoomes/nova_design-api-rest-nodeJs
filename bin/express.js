const express = require('express');
const bodyParser = require('body-parser');
const variables = require('../bin/configurations/variables');
const projetosRouter = require("../routes/projeto-routes");
const usuarioRouter = require('../routes/usuario-routes');
const clienteRouter = require('../routes/cliente-routes');
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//conexao
mongoose.connect(variables.Database.connection);

app.use("/api/projetos", projetosRouter);
app.use("/api/usuario", usuarioRouter);
app.use("/api/clientes", clienteRouter);

module.exports = app;
