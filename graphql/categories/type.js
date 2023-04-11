import PostType from "../posts/type.js";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import { posts } from "../posts/data.js";

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
        resolve(parent, args) {
          const postArray = posts.filter((post) => {
            return post.categories.find((catId) => catId === parent.id);
          });
          // return all posts associated with this category
          return postArray;
        },
      },
    };
  },
});

export default CategoryType;
