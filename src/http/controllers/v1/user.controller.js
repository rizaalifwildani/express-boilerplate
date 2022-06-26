const JWT = require('../../../helper/jwt.helper')
const Response = require('../../../helper/response.helper')
const UserResource = require('../../requests/resources/user.resource')

/** */
class UserController {
  /**
   * @method GET
   * @header Authorization
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async me(req, res) {
    const data = UserResource.resource(JWT.getData(req))
    new Response(res)
        .setData(data)
        .get()
  }
}

module.exports = UserController
