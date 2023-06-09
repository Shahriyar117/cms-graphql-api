import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { queryAllAuthors, queryAuthorById } from "./authors/query.js";
import { queryAllCategories, queryCategoryById } from "./categories/query.js";
import { queryAllComments, queryCommentById } from "./comments/query.js";
import { queryAllPosts, queryPostById } from "./posts/query.js";

import { mutationCreateComment } from "./comments/mutation.js";
import { mutationCreateAuthor } from "./authors/mutation.js";
import { mutationCreateCategory } from "./categories/mutation.js";

const rootQueryFields = {
  authors: queryAllAuthors,
  posts: queryAllPosts,
  categories: queryAllCategories,
  comments: queryAllComments,
  author: queryAuthorById,
  post: queryPostById,
  category: queryCategoryById,
  comment: queryCommentById,
};

const rootMutationFields = {
  mutationCreateComment,
  mutationCreateAuthor,
  mutationCreateCategory,
};

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "This is the root query",
  fields: rootQueryFields,
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  description: "This is the root mutation",
  fields: rootMutationFields,
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

export default schema;
