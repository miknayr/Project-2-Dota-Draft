'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      team_name: {
        type: Sequelize.STRING
      },
      hero_1: {
        type: Sequelize.STRING
      },
      hero_2: {
        type: Sequelize.STRING
      },
      hero_3: {
        type: Sequelize.STRING
      },
      hero_4: {
        type: Sequelize.STRING
      },
      hero_5: {
        type: Sequelize.STRING
      },
      hero_1_img: {
        type: Sequelize.STRING
      },
      hero_2_img: {
        type: Sequelize.STRING
      },
      hero_3_img: {
        type: Sequelize.STRING
      },
      hero_4_img: {
        type: Sequelize.STRING
      },
      hero_5_img: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};