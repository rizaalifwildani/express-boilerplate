'use strict'
const {
  Model,
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  /**
   * @extends Model
   */
  class School extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      // define association here
    }
  }
  School.init(
      {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
        latLon: DataTypes.STRING,
        accreditation: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'School',
      },
  )
  return School
}
