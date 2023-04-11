"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts_categories", {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "posts",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts_categories");
  },
};
