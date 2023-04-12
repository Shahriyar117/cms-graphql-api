import models from "../../database/models/index.js";

export const getAllCategories = async () => {
  const categories = await models.categories.findAll({
    include: [
      {
        model: models.posts,
      },
    ],
  });
  return categories;
};

export const getCategoryById = async (categoryId) => {
  const category = await models.categories.findOne({
    where: {
      id: categoryId,
    },
    include: [
      {
        model: models.posts,
      },
    ],
  });
  return category;
};
