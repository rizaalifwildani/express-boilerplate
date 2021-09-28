const JWT = require('../../helper/jwt.helper')
const Response = require('../../helper/response.helper')
const MemberResource = require('../requests/resources/member.resource')

module.exports = class MemberController {
  /**
   * @method GET
   * @header Authorization
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async profile(req, res) {
    const data = MemberResource.resource(JWT.getData(req))
    new Response(res)
        .setData(data)
        .get()
  }
}
