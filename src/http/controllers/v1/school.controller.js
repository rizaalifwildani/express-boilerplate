const Response = require('../../../helper/response.helper')
const SchoolResource = require('../../requests/resources/school.resource')
const {School} = require('../../../database/models/index')

/** */
class SchoolController {
  /**
   * @method GET
   * @header Authorization
   * @param {Request} req http request
   * @param {Response} res http response
   */
  static async all(req, res) {
    const user = await School.findAll()
    const userdata = user.map((item) => SchoolResource.resource(item))

    new Response(res).setData(userdata).get()
  }
}

module.exports = SchoolController
