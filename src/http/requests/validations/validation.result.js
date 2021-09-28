const {validationResult} = require('express-validator')
const httpStatus = require('http-status')
const Response = require('../../../helper/response.helper')

const getValidationResult = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    new Response(res)
        .setData(errors.array())
        .setStatus(httpStatus.UNPROCESSABLE_ENTITY)
        .get()
  } else {
    next()
  }
}

module.exports = getValidationResult
