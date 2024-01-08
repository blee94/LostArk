const express = require('express');
const multer = require('multer');
const controller = require('../controller/CUpload');
const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 파일 저장 경로 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 파일 이름 설정 (유니크하게 설정하는 것이 좋음)
  },
});

const upload = multer({ storage: storage });

uploadRouter.post('/', upload.single('image'), controller.uploadImage);

module.exports = uploadRouter;
