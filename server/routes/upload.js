const express = require('express');
const multer = require('multer');
const controller = require('../controller/CUpload');
const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

uploadRouter.post('/', upload.single('image'), controller.uploadImage);

module.exports = uploadRouter;
