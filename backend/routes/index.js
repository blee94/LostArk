const express = require('express');
const router = express.Router();
const controller = require('../controller/CMain'); // 데이터 처리를 위한 컨트롤러 파일을 불러옵니다.

router.post('/data', controller.handleData); // '/data'에 대한 POST 요청 처리

module.exports = router;
