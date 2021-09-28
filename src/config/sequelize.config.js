const {Sequelize, DataTypes} = require('sequelize')
const Member = require('../http/models/member.model')
require('dotenv').config()

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

const db = {}
db.Sequelize = Sequelize
db.connection = database
db.Member = Member(database, DataTypes)

// Service to Package : 1 To M
// db.Service.hasMany(db.Package, {
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
//   foreignKey: {
//     name: 'serviceId',
//   },
//   as: 'packages',
// })

// Package to Service : 1 To 1
// db.Package.belongsTo(db.Service, {
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE',
//   foreignKey: {
//     name: 'serviceId',
//   },
//   as: 'service',
// })

// db.connection.sync({force: true})

module.exports = db
