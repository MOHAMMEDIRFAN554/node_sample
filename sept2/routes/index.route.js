const express = require('express');
const router = express.Router();

const studentRoutes = require('./student.route');
const teacherRoutes = require('./teacher.route');

router.use('/students', studentRoutes);
router.use('/teachers', teacherRoutes);

module.exports = router;
