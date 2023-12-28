const { User } = require('./User');

function Img_like(Sequelize, DataTypes) {
  return Sequelize.define(
    'Img_like',
    {
      imglikeidx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      useridx: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imgidx: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'Img_like',
      freezeTableName: true,
      timestamps: false,
      uniqueKeys: {
        unique_img_like: {
          fields: ['useridx', 'imgidx'],
        },
      },
    }
  );
}

module.exports = Movie_like;
