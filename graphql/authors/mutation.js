import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { createAuthor } from "./data.js";
import AuthorType from "./type.js";

export const mutationCreateAuthor = {
  type: AuthorType,
  args: {
    name: { type: GraphQLString },
    bio: { type: GraphQLString },
  },
  resolve: (parent, args, context, info) => createAuthor(args),
};
