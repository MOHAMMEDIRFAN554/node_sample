const express = require('express');
const router = express.Router();
const atm = require('../controllers/atmController');

router.get('/', atm.welcome);
router.post('/insert', atm.insertCard);
router.post('/generate', atm.generateCard);
router.post('/pinenter', atm.pinEnter);

router.get('/balance', atm.balance);
router.get('/mini-statement', atm.miniStatement);
router.post('/withdraw', atm.withdraw);
router.post('/deposit', atm.deposit);

router.post('/pinchange', atm.pinChange);
router.post('/transfer', atm.transfer);
router.post('/billpay', atm.billPay);
router.post('/loanpay', atm.loanPay);
router.post('/chequedd', atm.chequeDD);
router.post('/language', atm.language);
router.post('/fastcash', atm.fastCash);
router.post('/block', atm.blockCard);
router.post('/updatecontact', atm.updateContact);

module.exports = router;
