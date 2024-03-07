const express = require('express');
const router = express.Router();
const controller = require('../controller/CUser');
router.get('/userinfo', controller.getUserInfo);

module.exports = router;
