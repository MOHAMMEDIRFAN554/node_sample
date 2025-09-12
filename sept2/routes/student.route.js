const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.post('/insert', studentController.insertStudent);
router.get('/getAll', studentController.getAllStudents);
router.get('/getById/:id', studentController.getStudentById);
router.put('/update/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;
