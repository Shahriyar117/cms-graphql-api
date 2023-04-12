import models from "../../database/models/index.js";

export const getAllPosts = async () => {
  const posts = await models.posts.findAll({
    include: [
      {
        model: models.authors,
      },
      {
        model: models.categories,
      },
      {
        model: models.comments,
      },
    ],
  });
  return posts;
};

export const getPostById = async (postId) => {
  const post = await models.posts.findOne({
    where: {
      id: postId,
    },
    include: [
      {
        model: models.authors,
      },
      {
        model: models.categories,
      },
      {
        model: models.comments,
      },
    ],
  });
  return post;
};
