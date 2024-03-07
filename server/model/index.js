const Sequelize = require('sequelize');
// 로컬에서 작업 시 development 사용
const config = require('../config/config.json')['development'];
// 배포시에는 production으로
// const config = require('../config/config.json')['production'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = require('./User')(sequelize, Sequelize);
db.PostImg = require('./PostImg')(sequelize, Sequelize);
db.ImgLike = require('./ImgLike')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
