module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "categories",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      indexes: [{ fields: ["slug"] }],
      hooks: {
        beforeValidate: function (category, options) {
          category.slug = slugify(category.name, { lower: true });
        },
      },
    }
  );

  Category.associate = (models) => {
    Category.belongsToMany(models.posts, {
      through: models.posts_categories,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
  };

  return Category;
};
