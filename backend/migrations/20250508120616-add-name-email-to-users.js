'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'name', {
      type: Sequelize.STRING(100),
      allowNull: true
    });
    await queryInterface.addColumn('users', 'email', {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'name');
    await queryInterface.removeColumn('users', 'email');
  }
};
