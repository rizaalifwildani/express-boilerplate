const express = require('express')
const router = express.Router()
const GUEST = require('../../middleware/guest.middleware')
const AUTH = require('../../middleware/auth.middleware')
const registerValidation = require('../../http/requests/validations/register.validation')
const getValidationResult = require('../../http/requests/validations/validation.result')
const AuthController = require('../../http/controllers/v1/auth.controller')

/**
 * @swagger
 * components:
 *  schemas:
 *    UserRegister:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *          required: true
 *          description: The first name of the user
 *        lastName:
 *          type: string
 *          description: The last name of the user
 *        email:
 *          required: true
 *          type: string
 *          description: The email of the user
 *        phone:
 *          required: true
 *          type: string
 *          description: The phone of the user
 *        password:
 *          required: true
 *          type: string
 *          description: The password of the user
 *      example:
 *        id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *        firstName: Jhon
 *        lastName: Doe
 *        email: jhon@example.com
 *        phone: "+6285920616342"
 *        password: password
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *    summary: Register for New User (Guest)
 *    tags: [Auth v1]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            items:
 *              $ref: '#/components/schemas/UserRegister'
 *            example:
 *              id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *              firstName: Jhon
 *              lastName: Doe
 *              email: jhon@example.com
 *              phone: "+6285920616342"
 *              password: password
 *    responses:
 *      201:
 *        description: Registration Success
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                token:
 *                  type: string
 *              example:
 *                token: sdasasjd11231dasda
 *      422:
 *        description: Unresponsible entitiy
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UnprocessibleEntity'
 */
router.post('/register', GUEST, registerValidation(), getValidationResult, AuthController.register)

/**
 * @swagger
 * components:
 *  schemas:
 *    UserLogin:
 *      type: object
 *      properties:
 *        email:
 *          required: true
 *          type: string
 *          description: The email of the user
 *        password:
 *          required: true
 *          type: string
 *          description: The password of the user
 *      example:
 *        email: jhon@example.com
 *        password: password
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    summary: Login (Guest)
 *    tags: [Auth v1]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            items:
 *              $ref: '#/components/schemas/UserLogin'
 *          example:
 *            email: jhon@example.com
 *            password: password
 *    responses:
 *      200:
 *        description: Login Success
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                token:
 *                  type: string
 *                  description: The auto generated bearer token
 *              example:
 *                token: sdlkasldiweoqiekmsdksamdklsiwqekasmdlkasmda
 *      422:
 *        description: Unresponsible entitiy
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/UnprocessibleEntity'
 */
router.post('/login', GUEST, AuthController.login)

/**
 * @swagger
 * /api/v1/auth/logout:
 *  patch:
 *    summary: Logout for current session
 *    tags: [Auth v1]
 *    responses:
 *      200:
 *        description: Logout Success
 *        content:
 *          application/json:
 *            schema:
 *              type: boolean
 *              example:
 *                 true
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                null
 */
router.patch('/logout', AUTH, AuthController.logout)

module.exports = router
