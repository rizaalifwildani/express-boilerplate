const express = require('express')

const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./cors.config')
const routes = require('../routes/index.routes')
require('dotenv').config()
require('./sequelize.config')

app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

module.exports = app
