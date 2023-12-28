const express = require('express');
const controller = require('../controller/CMain');
const router = express.Router();

router.get('/', controller.main);

module.exports = router;
