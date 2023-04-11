module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comments",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.posts, {
      onDelete: "cascade",
      foreignKey: "postId",
    });
  };

  return Comment;
};
