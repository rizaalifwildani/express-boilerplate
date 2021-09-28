const jwt = require('jsonwebtoken')

module.exports = class JWT {
  /**
   * @param {Request} req http request.
   * @return {String} token.
   */
  static getToken(req) {
    const cookieToken = req.cookies.token
    const {authorization} = req.headers
    const token = authorization && authorization.split(' ')[1]
    if (cookieToken === token) {
      return token
    }
    return ''
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
   * @param {Response} res http response.
   * @param {Object} data
   * @return {String} token.
   */
  static generateToken(res, data) {
    const token = jwt.sign(data, process.env.JWT_TOKEN_SECRET, {expiresIn: '86400s'}) // 86400 = 1 Day
    res.cookie('token', token, {maxAge: 24 * 60 * 60 * 1000})
    return token
  }

  /**
   * @param {Request} req http request.
   * @return {Object} data
   */
  static getData(req) {
    const token = this.getToken(req)
    if (!this.verifyToken(token)) {
      return {}
    }
    return jwt.decode(token)
  }

  /**
   * @param {Request} req http request.
   * @param {Response} res http response.
   * @return {Boolean}
   */
  static destroyToken(req, res) {
    const token = this.getToken(req)
    res.cookie('token', token, {maxAge: 0})
    return true
  }
}
