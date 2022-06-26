const express = require('express')
const httpStatus = require('http-status')
const Response = require('../helper/response.helper')

const router = express.Router()
const v1 = require('./v1/v1.routes')

/**
 * @swagger
 * components:
 *  schemas:
 *    Header:
 *      properties:
 *        Content-Type:
 *          type: string
 *          description: Content Type Header
 *        Authorization:
 *          type: string
 *          description: Authorization Header ( Bearer )
 *      example:
 *        Content-Type: application/json
 *        Authorization: Bearer sdss213121312323saddsada
 *
 *    UnprocessibleEntity:
 *      properties:
 *        value:
 *          type: string
 *          description: The request body value
 *        msg:
 *          type: string
 *          description: The error message
 *        param:
 *          type: string
 *          description: The request body key
 *        location:
 *          type: string
 *          description: The location of the request
 *      example:
 *        value: jhondoe
 *        msg: must be a valid email
 *        param: email
 *        location: body
 */
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
