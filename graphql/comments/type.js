import PostType from "../posts/type.js";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from "graphql";

const CommentType = new GraphQLObjectType({
  name: "CommentType",
  description: "Comments on post",
  fields: () => {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      comment: { type: new GraphQLNonNull(GraphQLString) },
      post: { type: new GraphQLNonNull(PostType) },
    };
  },
});

export default CommentType;
