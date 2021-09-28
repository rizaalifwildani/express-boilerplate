const express = require('express')

const router = express.Router()
const AUTH = require('../../middleware/auth.middleware')
const auth = require('./auth.routes')
const member = require('./member.routes.js')

router.use('/members', AUTH, member)
router.use('/auth', auth)

module.exports = router
