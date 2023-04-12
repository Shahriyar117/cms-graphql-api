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

export const createComment = async ({ name, email, comment, postId }) => {
  try {
    const newComment = await models.comments.create({
      name,
      email,
      comment,
      postId,
    });
    return newComment;
  } catch (error) {
    return error;
  }
};
