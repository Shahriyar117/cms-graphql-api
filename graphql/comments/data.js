import models from "../../database/models/index.js";

export const getAllComments = async () => {
  const comments = await models.comments.findAll();
  return comments;
};

export const getCommentById = async (commentId) => {
  const comment = await models.comments.findOne({
    where: {
      id: commentId,
    },
  });
  return comment;
};
