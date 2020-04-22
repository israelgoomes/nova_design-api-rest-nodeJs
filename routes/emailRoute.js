'use-strict'

const express = require('express');
const router = express.Router();
const sendEmail = require('../controllers/email-controller');
//onst controller = require('../controllers/clientes-contoller');
// let _ctrl = new sendEmail();
let _ctrl = new sendEmail();

 router.post('/', _ctrl.sendEmailMet)
 
module.exports = router;


