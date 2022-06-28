const httpStatus = require('http-status')
const JWT = require('../../../helper/jwt.helper')
const Response = require('../../../helper/response.helper')
const userRepository = require('../../../database/repositories/user.repository')
const UserResource = require('../../requests/resources/user.resource')

/** */
class AuthController {
  /**
   * @method POST
   * @body :
   * firstName String
   * lastName String
   * email String
   * password String
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async register(req, res) {
    const token = await userRepository.register(req.body, res)
    if (token) {
      new Response(res)
          .setData({token})
          .setStatus(httpStatus.CREATED)
          .setMessage('Register Success')
          .get()
    } else {
      new Response(res)
          .setStatus(httpStatus.BAD_REQUEST)
          .setMessage('Register Failed')
          .get()
    }
  }

  /**
   * @method POST
   * @body :
   * email String | phone String
   * password String
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static async login(req, res) {
    const token = await userRepository.login(req.body)

    if (token) {
      new Response(res)
          .setData({token})
          .setMessage('Login Success')
          .get()
    } else {
      new Response(res)
          .setStatus(httpStatus.UNPROCESSABLE_ENTITY)
          .setMessage('Email/Phone or password doesn\'t match')
          .get()
    }
  }

  /**
   * @method PATCH
   * @param {Request} req http request.
   * @param {Response} res http response.
   */
  static logout(req, res) {
    if (JWT.destroyToken(req)) {
      new Response(res)
          .setData(true)
          .setMessage('Logout Success')
          .get()
    } else {
      new Response(res)
          .setStatus(httpStatus.UNAUTHORIZED)
          .setMessage(httpStatus[httpStatus.UNAUTHORIZED])
          .get()
    }
  }

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

module.exports = AuthController
