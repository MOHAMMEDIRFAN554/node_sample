const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.post('/createUser',userController.createUser)
router.get('/getAll',userController.getUser)
router.post('/findOne',userController.findOne)
router.post('/item',userController.createBill)
router.put('/updateUser/:id', userController.updateUser)   
router.delete('/deleteUser/:id', userController.deleteUser)
module.exports= router 