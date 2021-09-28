/* eslint-disable require-jsdoc */
const httpStatus = require('http-status')

class Response {
  constructor(res) {
    this.res = res
    this.data = null
    this.status = httpStatus.OK
    this.message = httpStatus[httpStatus.OK]
  }

  setData(data) {
    this.data = data
    return this
  }

  setStatus(status) {
    this.status = status
    return this
  }

  setMessage(message) {
    this.message = message
    return this
  }

  get() {
    return this.res.status(this.status).json({
      data: this.data,
      header: {
        status: this.status,
        message: this.message,
      },
    })
  }
}

module.exports = Response
