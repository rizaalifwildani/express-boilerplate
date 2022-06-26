const httpStatus = require('http-status')
const userRepository = require('../database/repositories/user.repository')
const JWT = require('../helper/jwt.helper')
const Response = require('../helper/response.helper')

const AUTH = async (req, res, next) => {
  const data = JWT.getData(req)
  let authorize = false
  if (data) {
    const user = await userRepository.findByID(data.id)
    if (user && user.expiryToken > 0) {
      authorize = true
    }
  }
  if (!authorize) {
    new Response(res)
        .setStatus(httpStatus.UNAUTHORIZED)
        .setMessage(httpStatus[httpStatus.UNAUTHORIZED])
        .get()
  } else {
    next()
  }
}

module.exports = AUTH
