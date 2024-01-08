const express = require('express');
const uploadRouter = express.Router();
const controller = require('../controller/CUpload');

uploadRouter.post('/', controller.uploadImg);

module.exports = uploadRouter;
