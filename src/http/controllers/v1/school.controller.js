const Response = require('../../../helper/response.helper')
const SchoolRepository = require('../../../database/repositories/school.repository')
const SchoolResource = require('../../requests/resources/school.resource')

/** */
class SchoolController {
  /**
   * @method GET
   * @header Authorization
   * @param {Request} req http request
   * @param {Response} res http response
   */
  static async all(req, res) {
    const schools = await SchoolRepository.findAll()
    const schoolsData = schools.map((item) => SchoolResource.resource(item))

    new Response(res).setData(schoolsData).get()
  }
}

module.exports = SchoolController
