import AuthorType from "../authors/type.js";
import CategoryType from "../categories/type.js";
import CommentType from "../comments/type.js";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean,
  GraphQLNonNull,
} from "graphql";

const PostType = new GraphQLObjectType({
  name: "PostType",
  description: "Post",
  fields: () => {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      slug: { type: new GraphQLNonNull(GraphQLString) },
      excerpt: { type: new GraphQLNonNull(GraphQLString) },
      content: { type: new GraphQLNonNull(GraphQLString) },
      featuredPost: { type: GraphQLBoolean },
      featuredImage: { type: GraphQLString },
      author: {
        type: new GraphQLNonNull(AuthorType),
      },
      categories: {
        type: new GraphQLNonNull(new GraphQLList(CategoryType)),
      },
      comments: {
        type: new GraphQLList(CommentType),
      },
    };
  },
});

export default PostType;
