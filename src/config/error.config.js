const httpStatus = require('http-status')
const Response = require('../helper/response.helper')

const customErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    next()
  } else {
    if (err.message === 'Not allowed by CORS') {
      new Response(res)
          .setStatus(httpStatus.BAD_REQUEST)
          .setMessage(httpStatus[httpStatus.BAD_REQUEST])
          .get()
    } else if (res.statusCode === 500) {
      new Response(res)
          .setStatus(httpStatus.INTERNAL_SERVER_ERROR)
          .setMessage(httpStatus[httpStatus.INTERNAL_SERVER_ERROR])
          .get()
    } else {
      next()
    }
  }
}

module.exports = customErrorHandler
