"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          id: 1,
          postId: 1,
          name: "Syed Shahriyar",
          email: "s@gmail.com",
          comment: "This is the comment by author Shahriyar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
