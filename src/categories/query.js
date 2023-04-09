import CategoryType from "./type.js";
import { GraphQLList, GraphQLID } from "graphql";
import { categories } from "./data.js";

export const getAllCategories = {
  type: new GraphQLList(CategoryType),
  resolve: () => categories,
};

export const getCategoryById = {
  type: CategoryType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, { id }, context, info) =>
    categories.find((category) => category.id == id),
};
