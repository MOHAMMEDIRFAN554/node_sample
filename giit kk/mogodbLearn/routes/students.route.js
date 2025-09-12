const express = require('express');
const router = express.Router();

const studentController = require('./../controller/student.controller')

router.route('/getAllStudents').get(studentController.getAllStudents);

router.route('/getStudentByName').get(studentController.getStudentByName);

router.route('/insertStudent').post(studentController.inserStudent)

module.exports = router;