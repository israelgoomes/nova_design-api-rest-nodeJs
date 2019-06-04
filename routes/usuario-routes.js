'use strict'

const express = require('express');
const router = mongoose.Router();

const controller = require('../controllers/usuario-controller');
const _ctrl = new controller();

router.get('/', _ctrl.get);
router.getById('/:id', _ctrl.getById);
router.post('/', _ctrl.post);
router.put('/:id', _ctrl.put);
router.delete('/:id', _ctrl.delete);

module.exports = router;