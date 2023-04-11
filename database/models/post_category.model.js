module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "posts_categories",
    {
      postId: {
        type: DataTypes.INTEGER,
        field: "postId",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: "categoryId",
      },
    },
    {
      freezeTableName: true,
      timestamps: true,

      classMethods: {
        associate(models) {
          PostCategory.belongsTo(models.posts, {
            as: "post",
            foreignKey: "postId",
          });
          PostCategory.belongsTo(models.categories, {
            as: "category",
            foreignKey: "categoryId",
          });
        },
      },
    }
  );

  return PostCategory;
};
