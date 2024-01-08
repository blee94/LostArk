const express = require('express');
const imgLikeRouter = express.Router();
const controller = require('../controller/CImgLike');

imgLikeRouter.post('/', controller.imgLike);

module.exports = imgLikeRouter;
