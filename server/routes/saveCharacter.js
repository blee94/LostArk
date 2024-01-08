const express = require('express');
const saveCharacterRouter = express.Router();
const controller = require('../controller/CSaveCharacter');

saveCharacterRouter.post('/', controller.saveCharacter);

module.exports = saveCharacterRouter;
