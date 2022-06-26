'use strict'
const {
  DataTypes,
  Model,
} = require('sequelize')
const uuid = require('uuid')
const PASSWORD = require('../../helper/password.helper')
module.exports = (sequelize, dt) => {
  /**
   * @extends Model
   */
  class User extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    expiryToken: DataTypes.DOUBLE,
  }, {
    hooks: {
      beforeCreate: async (data) => {
        const user = data
        const hashedPassword = PASSWORD.generate(user.password)
        user.id = uuid.v4()
        user.password = hashedPassword
        user.createdAt = new Date()
        user.updatedAt = new Date()
      },
    },
    sequelize,
    modelName: 'User',
  })
  return User
}
