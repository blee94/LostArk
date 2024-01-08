const express = require('express');
const signupRouter = express.Router();
const controller = require('../controller/CSignUp');

signupRouter.post('/', controller.userSignUp);

module.exports = signupRouter;
