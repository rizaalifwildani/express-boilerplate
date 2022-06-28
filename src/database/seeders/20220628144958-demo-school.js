'use strict'
const uuid = require('uuid')

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
        id: uuid.v4(),
        isVerified: true,
        name: 'SMA Negeri 5 Bekasi',
        latLon: '0,0',
        accreditation: 'A',
        nspp: '000000',
        email: 'sman5bks@gmail.com',
        phone: '02127438384',
        address: '',
        provinceId: 12,
        cityId: 181,
        districtId: 2510,
        subdistrictId: 30817,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Schools', null, {})
  },
}
