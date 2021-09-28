const {Member} = require('../../config/sequelize.config')
const JWT = require('../../helper/jwt.helper')
const PASSWORD = require('../../helper/password.helper')
const Repository = require('./repository')

/** */
class MemberRepository extends Repository {
  /**
   * @import Member
  */
  constructor() {
    super(Member)
  }

  /**
   * @param {Object} data
   * @param {Response} res
   * @return {Promise} token | null.
   */
  register(data, res) {
    return this.create(data).then((member) => {
      const dataMember = member
      delete dataMember.password
      const token = JWT.generateToken(res, dataMember)
      return token
    }).catch(() => null)
  }

  /**
   * @param {Object} data
   * @param {Response} res
   * @return {Promise} token.
   */
  async login(data, res) {
    const {
      email, phone, password,
    } = data

    let dataMember = null

    if (email) {
      dataMember = await this.findOne({email})
    } else {
      dataMember = await this.findOne({phone})
    }

    let token = null

    if (dataMember) {
      if (PASSWORD.verify(password, dataMember.dataValues.password)) {
        delete dataMember.dataValues.password
        token = JWT.generateToken(res, dataMember.dataValues)
      }
    }

    return token
  }
}

module.exports = new MemberRepository()
