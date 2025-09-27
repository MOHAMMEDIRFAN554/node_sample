const express = require('express')
const router = express.Router();
const auth = require('../middleware/authMiddleware')
const user = require('../controller/userController')


router.get('/getAllUser', auth, user.getAllUser)




module.exports = router