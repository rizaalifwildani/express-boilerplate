const {check} = require('express-validator')
const {Member} = require('../../../config/sequelize.config')

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
      .custom((val) => Member.findOne({
        raw: true,
        where: {
          phone: val,
        },
      }).then((member) => {
        if (member) {
          throw Error('phone already in use')
        } else {
          return true
        }
      })),
  check('email')
      .isEmail()
      .withMessage('must be a valid email')
      .custom((val) => Member.findOne({
        raw: true,
        where: {
          email: val,
        },
      }).then((member) => {
        if (member) {
          throw Error('email already in use')
        } else {
          return true
        }
      })),
  check('password')
      .isLength({min: 5})
      .withMessage('must be at least 5 characters long')
      .custom((val, {req}) => {
        if (val !== req.body.passwordConfirmation) {
          throw Error('password confirmation does\'t match with password')
        } else {
          return true
        }
      }),
]

module.exports = registerValidation
