const {check} = require('express-validator')
const {User} = require('../../../database/models/index')

const registerValidation = () => [
  check('firstName')
      .isString()
      .withMessage('must be alphabet only')
      .isLength({min: 3})
      .withMessage('must be at least 3 characters long'),
  check('lastName')
      .isString()
      .withMessage('must be alphabet only'),
  check('phone')
      .isNumeric()
      .withMessage('must be number only')
      .isLength({min: 9})
      .withMessage('must be at least 9 characters long')
      .custom((val) => User.findOne({
        raw: true,
        where: {
          phone: val,
        },
      }).then((user) => {
        if (user) {
          throw Error('phone already in use')
        } else {
          return true
        }
      })),
  check('email')
      .isEmail()
      .withMessage('must be a valid email')
      .custom((val) => User.findOne({
        raw: true,
        where: {
          email: val,
        },
      }).then((user) => {
        if (user) {
          throw Error('email already in use')
        } else {
          return true
        }
      })),
  check('password')
      .isLength({min: 5})
      .withMessage('must be at least 5 characters long'),
]

module.exports = registerValidation
