'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('User', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Schools', [
      {
        name: 'Sekolah rajin',
        city: 'Bekasi',
        latLon: '0,0',
        accreditation: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SMA 1',
        city: 'Bekasi',
        latLon: '0,0',
        accreditation: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'SMA 2',
        city: 'Jakarta',
        latLon: '0,0',
        accreditation: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Schools', null, {})
  },
}
