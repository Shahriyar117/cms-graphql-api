import PostType from "../posts/type.js";
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import { posts } from "../posts/data.js";

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
        resolve(parent, args) {
          const postArray = posts.filter((post) => {
            console.log(post);
            return post.author === parent.id;
          });
          return postArray;
        },
      },
    };
  },
});

export default AuthorType;
