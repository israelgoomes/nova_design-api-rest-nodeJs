const express = require('express');
const bodyParser = require('body-parser');
const variables = require('../bin/configurations/variables');
const projetosRouter = require("../routes/projeto-routes");
const usuarioRouter = require('../routes/usuario-routes');
const clienteRouter = require('../routes/cliente-routes');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
/*
app.get('*', (req, res, next) => {
  
  if (req.headers['x-forwarded-proto'] != 'https') {
      
// checa se o header é HTTP ou HTTPS

      res.redirect("https://" + req.headers.host + req.url);
      
// faz o redirect para HTTPS

  } else {
      next();
      
// segue com a sequência das rotas

  }
});*/
const allowedOrigins = [
    
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100'

  ];

  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }

 app.options('*', cors(corsOptions));
 app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
    res.setHeader("Access-Control-Allow-Origin", "*");
  })
  
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//conexao
mongoose.connect(variables.Database.connection);
app.use(cors());
app.use("/api/projetos", projetosRouter);
app.use("/api/usuario", usuarioRouter);
app.use("/api/clientes", clienteRouter);

module.exports = app;

