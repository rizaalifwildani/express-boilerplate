'use strict'
const {
  Model,
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  /**
   * @extends Model
   */
  class Subdistricts extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      // define association here
      Subdistricts.hasMany(models.School, {
        foreignKey: 'subdistrictId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    }
  }
  Subdistricts.init(
      {
        name: DataTypes.STRING,
        province_id: DataTypes.INTEGER,
        city_id: DataTypes.INTEGER,
        district_id: DataTypes.INTEGER,
        postcode: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Subdistricts',
        timestamps: false,
      },
  )
  return Subdistricts
}
