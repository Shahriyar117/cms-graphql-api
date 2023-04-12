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

export const createCategory = async ({ name }) => {
  try {
    const newCategory = await models.categories.create({
      name,
    });
    return newCategory;
  } catch (error) {
    return error;
  }
};
