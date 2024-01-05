const express = require('express');
const signinRouter = express.Router();
const controller = require('../controller/CSignIn');

signinRouter.post('/', controller.userSignIn);

module.exports = signinRouter;
