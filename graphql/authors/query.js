import AuthorType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { getAllAuthors, getAuthorById } from "./data.js";

export const queryAllAuthors = {
  type: new GraphQLList(AuthorType),
  resolve: () => getAllAuthors(),
};

export const queryAuthorById = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) => getAuthorById(id),
};
