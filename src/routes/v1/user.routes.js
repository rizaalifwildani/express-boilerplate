const express = require('express')
const UserController = require('../../http/controllers/v1/user.controller')

const router = express.Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The primary key of the user (uuid v4 value)
 *        firstName:
 *          type: string
 *          description: The first name of the user
 *        lastName:
 *          type: string
 *          description: The last name of the user
 *        email:
 *          type: string
 *          description: The email of the user
 *        phone:
 *          type: string
 *          description: The phone of the user
 *      example:
 *        id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *        firstName: Jhon
 *        lastName: Doe
 *        email: jhon@example.com
 *        phone: "+6285920616342"
 */

/**
 * @swagger
 * /api/v1/user/me:
 *  get:
 *    summary: Return the object of core web
 *    tags: [User v1]
 *    responses:
 *      200:
 *        description: the object of user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/User'
 *              example:
 *                id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *                firstName: Jhon
 *                lastName: Doe
 *                email: jhon@example.com
 *                phone: "+6285920616342"
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                null
 */
router.get('/me', UserController.me)

module.exports = router
