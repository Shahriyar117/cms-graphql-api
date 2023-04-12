import PostType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { getAllPosts, getPostById } from "./data.js";

export const queryAllPosts = {
  type: new GraphQLList(PostType),
  resolve: () => getAllPosts(),
};

export const queryPostById = {
  type: PostType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) => getPostById(id),
};
