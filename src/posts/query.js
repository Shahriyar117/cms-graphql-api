import PostType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { posts } from "./data.js";

export const getAllPosts = {
  type: new GraphQLList(PostType),
  resolve: () => posts,
};

export const getPostById = {
  type: PostType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) =>
    posts.find((post) => post.id == id),
};
