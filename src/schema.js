import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { getAllAuthors, getAuthorById } from "./authors/query.js";
import { getAllCategories, getCategoryById } from "./categories/query.js";
import { getAllComments, getCommentById } from "./comments/query.js";
import { getAllPosts, getPostById } from "./posts/query.js";
import { createComment } from "./comments/mutation.js";
import AuthorType from "./authors/type.js";
import CategoryType from "./categories/type.js";
import PostType from "./posts/type.js";
import CommentType from "./comments/type.js";

const rootQueryFields = {
  authors: getAllAuthors,
  posts: getAllPosts,
  categories: getAllCategories,
  comments: getAllComments,
  author: getAuthorById,
  post: getPostById,
  category: getCategoryById,
  comment: getCommentById,
};

const rootMutationFields = {
  createComment,
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
  //types: [AuthorType(), CategoryType(), PostType(), CommentType()],
  mutation: rootMutation,
});

export default schema;
