// import { GraphQLString } from "graphql";
// import { comments } from "./data.js";
// import CommentType from "./type.js";

// export const createComment = {
//   type: CommentType,
//   args: {
//     name: { type: GraphQLString },
//     email: { type: GraphQLString },
//     comment: { type: GraphQLString },
//   },
//   resolve: (parent, args, context, info) => {
//     //move it to data.js file after creating database and call fuction here
//     const newComment = {
//       id: comments.length + 1,
//       name: args.name,
//       email: args.email,
//       comment: args.comment,
//     };
//     comments.push(newComment);
//     return newComment;
//   },
// };
