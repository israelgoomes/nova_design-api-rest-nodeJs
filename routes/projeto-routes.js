const express = require('express');
const router = express.Router();

const controller = require('../controllers/projetos-controller');
const auth = require('../middlewares/authentication');

let _ctrl = new controller();

router.get('/', auth, _ctrl.get);
router.get('/:id', auth, _ctrl.getById);
router.get('/cliente/:id', auth, _ctrl.getByClienteId);
router.post('/', auth, _ctrl.post);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);



module.exports = router;