import CategoryType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { getAllCategories, getCategoryById } from "./data.js";

export const queryAllCategories = {
  type: new GraphQLList(CategoryType),
  resolve: () => getAllCategories(),
};

export const queryCategoryById = {
  type: CategoryType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) => getCategoryById(id),
};
