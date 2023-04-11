"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          id: 1,
          name: "Frontend Development",
          slug: "frontend-devlopment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Backend Development",
          slug: "backend-developments",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Full Stack",
          slug: "full-stack",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
