import AuthorType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { authors } from "./data.js";

export const getAllAuthors = {
  type: new GraphQLList(AuthorType),
  resolve: () => authors,
};

export const getAuthorById = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) =>
    authors.find((author) => author.id == id),
};
