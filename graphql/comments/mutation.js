import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { createComment } from "./data.js";
import CommentType from "./type.js";

export const mutationCreateComment = {
  type: CommentType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    comment: { type: GraphQLString },
    postId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args, context, info) => createComment(args),
};
