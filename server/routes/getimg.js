const express = require('express');
const getimgRouter = express.Router();
const controller = require('../controller/CGetImg');

getimgRouter.get('/', controller.getImages);

module.exports = getimgRouter;
