import models from "../../database/models/index.js";
//const models = require("../../database/models/");

export default {
  async getAllAuthors() {
    const authors = await models.authors.findAll();
    console.log(authors);
    return authors;
  },

  async getAuthorById(authorId) {
    const author = await models.authors.findOne({
      where: {
        id: authorId,
      },
    });
    console.log(author);
    return author;
  },
};
