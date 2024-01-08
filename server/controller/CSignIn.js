const express = require('express');
const { User } = require('../model');

exports.userSignIn = (req, res) => {
  const { userid, pw } = req.body;

  User.findOne({ where: { userid } })
    .then((user) => {
      if (!user) {
        return res.json({
          isSuccess: false,
          message: '아이디가 존재하지 않습니다.',
        });
      }
      if (user.pw !== pw) {
        return res.json({
          isSuccess: false,
          message: '비밀번호가 일치하지 않습니다.',
        });
      }
      req.session.userid = user.userid;
      req.session.userSessionID = req.sessionID;
      // console.log('세션 유저 아이디: ', req.session.userid);
      // console.log('세션 아이디: ', req.session.userSessionID);
      console.log('세션 정보: ', req.session);

      res.json({
        isSuccess: true,
        userid: user.userid,
        message: '로그인 성공',
        sessionID: req.sessionID,
      });
      console.log('로그인 성공');
    })
    .catch((error) => {
      console.error('로그인 에러:', error);
      res.status(500).json({ isSuccess: false, message: '서버 에러' });
    });
};
