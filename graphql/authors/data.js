import models from "../../database/models/index.js";

export const getAllAuthors = async () => {
  const authors = await models.authors.findAll({
    include: [
      {
        model: models.posts,
      },
    ],
  });
  return authors;
};

export const getAuthorById = async (authorId) => {
  const author = await models.authors.findOne({
    where: {
      id: authorId,
    },
    include: [
      {
        model: models.posts,
      },
    ],
  });
  return author;
};
