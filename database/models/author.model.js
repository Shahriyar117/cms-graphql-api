module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "authors",
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
      bio: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  Author.associate = (models) => {
    Author.hasMany(models.posts);
  };

  return Author;
};
