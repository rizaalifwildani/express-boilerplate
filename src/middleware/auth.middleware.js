const httpStatus = require('http-status')
const JWT = require('../helper/jwt.helper')
const Response = require('../helper/response.helper')

const AUTH = (req, res, next) => {
  const token = JWT.getToken(req)
  if (!JWT.verifyToken(token)) {
    new Response(res)
        .setStatus(httpStatus.UNAUTHORIZED)
        .setMessage(httpStatus[httpStatus.UNAUTHORIZED])
        .get()
  } else {
    next()
  }
}

module.exports = AUTH
