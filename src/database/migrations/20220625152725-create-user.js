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
        validate: {
          notNull: true,
          max: 30,
        },
      },
      lastName: {
        type: Sequelize.STRING(20),
        defaultValue: '',
        validate: {
          max: 20,
        },
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
          notNull: true,
          isNumeric: true,
          max: 15,
        },
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        validate: {
          isEmail: true,
          notNull: true,
          max: 50,
        },
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          notNull: true,
          min: 6,
        },
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
