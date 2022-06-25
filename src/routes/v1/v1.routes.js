const express = require('express')

const router = express.Router()
const AUTH = require('../../middleware/auth.middleware')
const auth = require('./auth.routes')
const user = require('./user.routes.js')

/**
 * @swagger
 * tags:
 *  name: Auth v1
 *  description: API Auth v1
 */
router.use('/auth', auth)

/**
 * @swagger
 * tags:
 *  name: User v1
 *  description: API User v1 (With Authentication)
 */
router.use('/users', AUTH, user)

module.exports = router
