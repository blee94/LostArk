const { User, Sequelize } = require('../model');
const { Op } = require('sequelize');

exports.main = (req, res) => {
  res.render('main');
};
