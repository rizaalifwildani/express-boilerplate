const express = require('express')
const MemberController = require('../../http/controllers/v1/member.controller')

const router = express.Router()

router.get('/profile', MemberController.profile)

module.exports = router
