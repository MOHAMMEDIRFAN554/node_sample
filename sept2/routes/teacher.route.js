const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher.controller');

router.post('/insert', teacherController.insertTeacher);
router.get('/getAll', teacherController.getAllTeachers);
router.get('/getById/:id', teacherController.getTeacherById);
router.put('/update/:id', teacherController.updateTeacher);
router.delete('/delete/:id', teacherController.deleteTeacher);

module.exports = router;
