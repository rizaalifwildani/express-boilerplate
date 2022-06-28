'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schools', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        autoIncrement: false,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
        validate: {
          notNull: true,
          max: 30,
        },
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(30),
        validate: {
          notNull: true,
          max: 30,
        },
      },
      latLon: {
        allowNull: false,
        type: Sequelize.STRING(30),
        validate: {
          notNull: true,
          max: 30,
        },
      },
      accreditation: {
        allowNull: false,
        type: Sequelize.STRING(30),
        validate: {
          notNull: true,
          max: 30,
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
    await queryInterface.dropTable('Schools')
  },
}
