const express = require('express')
const app = express()

/* ENV */
require('dotenv').config()

/* BODY PARSER */
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/* CORS */
const corsConfig = require('./cors.config')
app.use(corsConfig)

/* ERROR HANDLER */
const errorConfig = require('./error.config')
app.use(errorConfig)

/* COOKIE */
const cookieParser = require('cookie-parser')
app.use(cookieParser())

/* SWAGGER */
const swaggerUi = require('swagger-ui-express')
const swaggerConfig = require('./swagger.config')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

/* ROUTE */
const routes = require('../routes/index.routes')
app.use(routes)

/* LOGGER */
const loggerConfig = require('./logger.config')
app.use(loggerConfig)

module.exports = app
