'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/usuario-controller');
const _ctrl = new controller();
const auth = require('../middlewares/authentication');

//criando a rota de autenticação do login, onde será gerado um token.
router.post('/autenticar', _ctrl.autenticar);

router.get('/', auth, _ctrl.get);
router.get('/:id', auth, _ctrl.getById);
router.post('/', _ctrl.post);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;