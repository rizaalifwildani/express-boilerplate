const PASSWORD = require('../../helper/password.helper')
const JWT = require('../../helper/jwt.helper')
const Repository = require('../config/repository')
const {User} = require('../models/index')

/** */
class UserRepository extends Repository {
  /**
   * @param {Model} User
  */
  constructor() {
    super(User)
  }

  /**
   * @param {Object} data
   * @param {Response} res
   * @return {Promise} token | null.
   */
  async register(data, res) {
    return this.create(data).then(async (user) => {
      const dataUser = user
      delete dataUser.password
      const token = JWT.generateToken(dataUser)
      if (token.length > 0) {
        const user = await User.findByPk(dataUser.id)
        user.expiryToken = 86400
        user.save()
      }
      return token
    }).catch(() => null)
  }

  /**
   * @param {Object} data
   * @return {Promise} token.
   */
  async login(data) {
    const {
      email, phone, password,
    } = data

    let dataUser = null

    if (email) {
      dataUser = await this.findOne({email})
    } else {
      dataUser = await this.findOne({phone})
    }

    let token = null

    if (dataUser) {
      if (PASSWORD.verify(password, dataUser.dataValues.password)) {
        delete dataUser.dataValues.password
        token = JWT.generateToken(dataUser.dataValues)
        if (token.length > 0) {
          const user = await this.findByID(dataUser.id)
          user.expiryToken = 86400
          user.save()
        }
      }
    }

    return token
  }
}

module.exports = new UserRepository()
