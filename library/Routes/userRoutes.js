const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAllUsers, getUser, deleteUser } = require('../controller/UserController');

router.get('/getAllUser', auth, getAllUsers);          // API 3
router.get('/getUser/:id', auth, getUser);           // API 4
router.delete('/deleteUser/:id', auth, deleteUser);     // API 5

module.exports = router;
