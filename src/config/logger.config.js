const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')

// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join('./', 'log'),
})

module.exports = morgan('combined', {stream: accessLogStream})
