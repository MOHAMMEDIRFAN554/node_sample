const express = require('express');
const router = express.Router();

router.route('/getTeacher').get((req, res)=> {
    res.send("get teacher details")
})

module.exports = router;