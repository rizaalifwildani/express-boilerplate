const express = require('express')

const router = express.Router()
const AUTH = require('../../middleware/auth.middleware')
const auth = require('./auth.routes')
const user = require('./user.routes.js')
const school = require('./school.routes.js')

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

/**
 * @swagger
 * tags:
 *  name: School v1
 *  description: API School v1
 */
router.use('/schools', school)

module.exports = router
