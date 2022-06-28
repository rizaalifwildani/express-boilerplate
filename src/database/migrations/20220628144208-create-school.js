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
      nspp: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
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
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      isVerified: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      provinceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      districtId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      subdistrictId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
