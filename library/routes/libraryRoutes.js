const express = require('express');
const router = express.Router();
const library = require("../controller/libraryController")

router.get('/', library.welcome);


module.exports = router;
