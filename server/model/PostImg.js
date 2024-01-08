// models/PostImg.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database'); // Sequelize 인스턴스

class PostImg extends Model {}

PostImg.init(
  {
    postimgidx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postimg: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // 참조하는 모델명
        key: 'useridx', // 참조하는 컬럼명
      },
    },
  },
  {
    sequelize,
    modelName: 'post_img', // 모델명
    timestamps: false, // timestamps를 사용하지 않을 경우
  }
);

module.exports = PostImg;
