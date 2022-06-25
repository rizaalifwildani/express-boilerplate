const cors = require('cors')

const whitelist = [
  'https://tokowebsites.com',
  'http://tokowebsites.com',
  'http://localhost:3001',
]

const corsConfig = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200,
  methods: ['OPTIONS', 'HEAD', 'GET', 'POST'],
}

module.exports = cors(corsConfig)
