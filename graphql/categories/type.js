import PostType from "../posts/type.js";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";

const CategoryType = new GraphQLObjectType({
  name: "CategoryType",
  description: "Categories",
  fields: () => {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      slug: { type: new GraphQLNonNull(GraphQLString) },
      posts: {
        type: new GraphQLList(PostType),
      },
    };
  },
});

export default CategoryType;
