import AuthorType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import AuthorDB from "./data.js";

export const getAllAuthors = {
  type: new GraphQLList(AuthorType),
  resolve: () => AuthorDB.getAllAuthors(),
};

export const getAuthorById = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) => AuthorDB.getAuthorById(id),
};
