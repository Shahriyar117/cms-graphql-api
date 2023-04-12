import CommentType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { getAllComments, getCommentById } from "./data.js";

export const queryAllComments = {
  type: new GraphQLList(CommentType),
  resolve: () => getAllComments(),
};

export const queryCommentById = {
  type: CommentType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) => getCommentById(id),
};
