const express = require('express')
const httpStatus = require('http-status')
const Response = require('../helper/response.helper')

const router = express.Router()
const v1 = require('./v1/v1.routes')

router.use('/api/v1', v1)

router.use((req, res, next) => {
  if (!req.route) {
    new Response(res)
        .setStatus(httpStatus.NOT_FOUND)
        .setMessage('Request not found')
        .get()
  }
  next()
})

module.exports = router
