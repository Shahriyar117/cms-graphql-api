import { GraphQLID, GraphQLString } from "graphql";
import { createCategory } from "./data.js";
import CategoryType from "./type.js";

export const mutationCreateCategory = {
  type: CategoryType,
  args: {
    name: { type: GraphQLString },
    //postId: { type: GraphQLID },
  },
  resolve: (parent, args, context, info) => createCategory(args),
};
