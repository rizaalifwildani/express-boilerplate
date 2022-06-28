'use strict'
const {
  Model,
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  /**
   * @extends Model
   */
  class City extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      // define association here
      City.hasMany(models.School, {
        foreignKey: 'cityId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    }
  }
  City.init(
      {
        name: DataTypes.STRING,
        province_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'City',
        timestamps: false,
      },
  )
  return City
}
