module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "posts",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      excerpt: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      featuredPost: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      indexes: [{ fields: ["slug"] }],
      hooks: {
        beforeValidate: function (post, options) {
          post.slug = slugify(post.title, { lower: true });
        },
      },
    }
  );

  Post.associate = (models) => {
    Post.belongsToMany(models.categories, {
      through: models.posts_categories,
      foreignKey: "postId",
      otherKey: "categoryId",
    });

    Post.belongsTo(models.authors, {
      onDelete: "cascade",
      foreignKey: "authorId",
    });

    Post.hasMany(models.comments);
  };

  return Post;
};
