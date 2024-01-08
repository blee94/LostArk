function PostImage(Sequelize, DataTypes) {
  return Sequelize.define(
    'postimg',
    {
      postimgidx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      postimg: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      userid: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'user',
          key: 'userid',
        },
      },
    },
    {
      tableName: 'postimg',
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = PostImage;
