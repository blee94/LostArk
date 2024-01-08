function ImgLike(Sequelize, DataTypes) {
  return Sequelize.define(
    'imglike',
    {
      imglikeidx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      imglike: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'useridx',
        },
      },
    },
    {
      tableName: 'imglike',
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = ImgLike;
