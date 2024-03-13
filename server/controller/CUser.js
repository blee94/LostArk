const express = require('express');
const { User } = require('../model');

exports.getUserInfo = async (req, res) => {
  try {
    const userId = req.session.userid;
    console.log('유저아이디:', userId);

    return res.json(userId);
  } catch (error) {
    console.error('에러:', error);
    return res.status(500).json({ message: '서버 에러' });
  }
};
