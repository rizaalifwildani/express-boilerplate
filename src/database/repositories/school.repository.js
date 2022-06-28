const Repository = require('../config/repository')
const {School} = require('../models/index')

/** */
class SchoolRepository extends Repository {
  /**
   * @param {Model} School
   */
  constructor() {
    super(School, ['province', 'city', 'district', 'subdistrict'])
  }
}

module.exports = new SchoolRepository()
