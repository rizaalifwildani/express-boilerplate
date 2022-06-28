'use strict'
const {
  Model,
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  /**
   * @extends Model
   */
  class Province extends Model {
    /**
     * @param {Model} models
     */
    static associate(models) {
      // define association here
      Province.hasMany(models.School, {
        foreignKey: 'provinceId',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      })
    }
  }
  Province.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Province',
        timestamps: false,
      },
  )
  return Province
}
