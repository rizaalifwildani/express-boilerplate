const jwt = require('jsonwebtoken')
const {User} = require('../database/models/index')

/** */
class JWT {
  /**
   * @param {Request} req http request.
   * @return {String} token.
   */
  static getToken(req) {
    const {authorization} = req.headers
    const token = authorization && authorization.split(' ')[1]
    return token
  }

  /**
   * @param {String} token
   * @return {Boolean}
   */
  static verifyToken(token) {
    return jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err) => {
      if (err) return false
      return true
    })
  }

  /**
   * @param {Object} data
   * @return {String} token.
   */
  static generateToken(data) {
    const token = jwt.sign(data, process.env.JWT_TOKEN_SECRET, {expiresIn: '86400s'}) // 86400 = 1 Day
    return token
  }

  /**
   * @param {Request} req http request.
   * @return {Object} data
   */
  static getData(req) {
    const token = this.getToken(req)
    if (!this.verifyToken(token)) {
      return null
    }
    return jwt.decode(token)
  }

  /**
   * @param {Request} req http request.
   * @return {Boolean}
   */
  static async destroyToken(req) {
    const data = this.getData(req)
    if (data) {
      const user = await User.findByPk(data.id)
      user.expiryToken = 0
      user.save()
      return true
    }
    return false
  }
}

module.exports = JWT
