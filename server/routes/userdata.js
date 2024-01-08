const express = require('express');
const userDataRouter = express.Router();
const userDataController = require('../controller/CUserData');

userDataRouter.get('/', userDataController.getUserData);

module.exports = userDataRouter;
