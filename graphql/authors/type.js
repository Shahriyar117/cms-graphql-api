import PostType from "../posts/type.js";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";

const AuthorType = new GraphQLObjectType({
  name: "AuthorType",
  description: "Author who create post",
  fields: () => {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      photo: { type: GraphQLString },
      bio: { type: GraphQLString },
      posts: {
        type: new GraphQLList(PostType),
      },
    };
  },
});

export default AuthorType;
