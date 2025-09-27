const express = require('express');
const router = express.Router();
const auth= require('../controller/AuthController');

router.post('/register', auth.register);  // API 1
router.post('/login', auth.login);        // API 2

module.exports = router;
