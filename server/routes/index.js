const express = require('express');
const router = express.Router();
const controller = require('../controller/CUser'); // 데이터 처리를 위한 컨트롤러 파일을 불러옵니다.
// const cors = require('cors');
// const app = express();
// app.use(cors({ origin: true, credentials: true }));

// 사용자 정보 불러오기
router.get('/userinfo', controller.getUserInfo);

module.exports = router;
