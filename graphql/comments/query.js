import CommentType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { comments } from "./data.js";

export const getAllComments = {
  type: new GraphQLList(CommentType),
  resolve: () => comments,
};

export const getCommentById = {
  type: CommentType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) =>
    comments.find((comment) => comment.id == id),
};
