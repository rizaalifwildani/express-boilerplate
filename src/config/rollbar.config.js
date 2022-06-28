const Rollbar = require('rollbar')
require('dotenv').config()

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = rollbar
