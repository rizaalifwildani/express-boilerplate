const express = require('express')
const MemberController = require('../../http/controllers/member.controller')

const router = express.Router()

router.get('/profile', MemberController.profile)

module.exports = router
