const express = require('express')
const router = express.Router()
const GUEST = require('../../middleware/guest.middleware')
const AUTH = require('../../middleware/auth.middleware')
const registerValidation = require('../../http/requests/validations/register.validation')
const getValidationResult = require('../../http/requests/validations/validation.result')
const AuthController = require('../../http/controllers/v1/auth.controller')

router.post('/register', GUEST, registerValidation(), getValidationResult, AuthController.register)
router.post('/login', GUEST, AuthController.login)
router.patch('/logout', AUTH, AuthController.logout)

module.exports = router
