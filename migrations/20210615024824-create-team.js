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
        type: Sequelize.INTEGER
      },
      hero_2: {
        type: Sequelize.INTEGER
      },
      hero_3: {
        type: Sequelize.INTEGER
      },
      hero_4: {
        type: Sequelize.INTEGER
      },
      hero_5: {
        type: Sequelize.INTEGER
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