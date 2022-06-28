'use strict'
const {
  Model,
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  /**
   * @extends Model
   */
  class Districts extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      // define association here
      Districts.hasMany(models.School, {
        foreignKey: 'districtId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    }
  }
  Districts.init(
      {
        name: DataTypes.STRING,
        province_id: DataTypes.INTEGER,
        city_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Districts',
        timestamps: false,
      },
  )
  return Districts
}
