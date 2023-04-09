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
import { categories } from "../categories/data.js";
import { authors } from "../authors/data.js";
import { comments } from "../comments/data.js";

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
        resolve(parent, args) {
          // return author associated with this post
          return authors.filter((author) =>
            author.posts.includes(parent.id)
          )[0];
        },
      },
      categories: {
        type: new GraphQLNonNull(new GraphQLList(CategoryType)),
        resolve(parent, args) {
          // return all categories associated with this post
          return categories.filter((category) =>
            category.posts.find((postId) => postId === parent.id)
          );
        },
      },
      comments: {
        type: new GraphQLList(CommentType),
        resolve(parent, args) {
          // return all comments associated with this post
          return comments.filter((comment) =>
            parent.comments.find((commentId) => commentId === comment.id)
          );
        },
      },
    };
  },
});

export default PostType;
