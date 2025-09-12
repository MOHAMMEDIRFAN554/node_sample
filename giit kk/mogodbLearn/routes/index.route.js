const express = require('express');
const router = express.Router();
const studentsRoute = require('./students.route');
const teachersRoute = require('./teachers.route')

router.use('/students', studentsRoute);
router.use('/teachers', teachersRoute);

module.exports = router;