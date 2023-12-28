const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];
// const config = require('../config/config.json')['production'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {
    define: {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database: ', err);
  });

module.exports = db;

const express = require('express');
const router = express.Router();
const User = require('./User');

router.post('/SignUp', async (req, res) => {
  try {
    const { userid, pw } = req.body;

    // User 모델을 사용하여 데이터베이스에 저장
    const newUser = await User.create({ userid, pw });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});

module.exports = router;
