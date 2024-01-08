const express = require('express');
const { User } = require('../model');

exports.getUserInfo = async (req, res) => {
  try {
    const userId = req.session.userid;
    console.log('유저아이디:', userId);

    // const user = await User.findOne({ where: { userid: userId } });

    // if (!user) {
    //   return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    // }

    // const userNickname = user.nickname;

    return res.json(userId);
  } catch (error) {
    console.error('에러:', error);
    return res.status(500).json({ message: '서버 에러' });
  }
};
