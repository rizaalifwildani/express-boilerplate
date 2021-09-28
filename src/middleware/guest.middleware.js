const httpStatus = require('http-status')
const Response = require('../helper/response.helper')

const GUEST = (req, res, next) => {
  if (req.get('Authorization')) {
    new Response(res)
        .setStatus(httpStatus.BAD_REQUEST)
        .setMessage(httpStatus[httpStatus.BAD_REQUEST])
        .get()
  } else {
    next()
  }
}

module.exports = GUEST
