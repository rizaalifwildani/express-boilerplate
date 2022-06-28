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
      School.hasMany(models.User, {
        foreignKey: 'schoolId',
      })
      School.belongsTo(models.Province, {
        foreignKey: 'provinceId',
        as: 'province',
      })
      School.belongsTo(models.City, {
        foreignKey: 'cityId',
        as: 'city',
      })
      School.belongsTo(models.Districts, {
        foreignKey: 'districtId',
        as: 'district',
      })
      School.belongsTo(models.Subdistricts, {
        foreignKey: 'subdistrictId',
        as: 'subdistrict',
      })
    }
  }
  School.init(
      {
        name: DataTypes.STRING,
        nspp: DataTypes.STRING,
        latLon: DataTypes.STRING,
        accreditation: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        isVerified: DataTypes.BOOLEAN,
        address: DataTypes.STRING,
        provinceId: DataTypes.INTEGER,
        cityId: DataTypes.INTEGER,
        districtId: DataTypes.INTEGER,
        subdistrictId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'School',
      },
  )
  return School
}
