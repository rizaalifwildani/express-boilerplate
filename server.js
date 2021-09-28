const app = require('./src/config/app.config')

const {PORT} = process.env || 5003

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
