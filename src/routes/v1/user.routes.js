const express = require('express')

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

module.exports = router
