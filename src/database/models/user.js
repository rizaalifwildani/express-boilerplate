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
        const hashedPassword = PASSWORD.generate(data.password)
        data.id = uuid.v4()
        data.password = hashedPassword
        data.createdAt = new Date()
        data.updatedAt = new Date()
      },
    },
    sequelize,
    modelName: 'User',
  })
  return User
}
