const express = require('express');
const logoutRouter = express.Router();

logoutRouter.get('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ isSuccess: false, message: '로그아웃 실패' });
    }
    res.clearCookie('userSession');
    res.json({ isSuccess: true, message: '로그아웃 성공' });
  });
});

module.exports = logoutRouter;
