'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        autoIncrement: false,
        primaryKey: true,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      lastName: {
        type: Sequelize.STRING(20),
        defaultValue: '',
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
          isNumeric: true,
        },
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      expiryToken: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  },
}
