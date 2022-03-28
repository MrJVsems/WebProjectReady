'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PlayerId: {
        type: Sequelize.INTEGER
      },
      LastName: {
        type: Sequelize.STRING
      },
      FirstName: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.CHAR
      },
      Height: {
        type: Sequelize.CHAR
      },
      Weight: {
        type: Sequelize.CHAR
      },
      ShirtNumber: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      CountryCode: {
        type: Sequelize.CHAR
      },
      TeamId: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Players');
  }
};