const express = require('express')
const SchoolController = require('../../http/controllers/v1/school.controller')

const router = express.Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    School:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: The primary key of the user (uuid v4 value)
 *        name:
 *          type: string
 *          description: The first name of the user
 *        city:
 *          type: string
 *          description: The last name of the user
 *        latLon:
 *          type: string
 *          description: The email of the user
 *        accreditation:
 *          type: string
 *          description: The phone of the user
 *      example:
 *        id: a9e8fb35-b502-4b03-9b19-30552d8df3ca
 *        name: SMA 5 Bekasi
 *        city: Bekasi
 *        latLon: 0000,0000
 *        accreditation: A
 */

/**
 * @swagger
 * /api/v1/schools:
 *  get:
 *    summary: Return the array of school objects
 *    tags: [School v1]
 *    responses:
 *      200:
 *        description: the array of school objects
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/School'
 *      404:
 *        description: Not Found
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                null
 */
router.get('/', SchoolController.all)


module.exports = router
