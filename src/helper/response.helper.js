const httpStatus = require('http-status')

/** */
class Response {
  /**
   * @param {Response} res
   */
  constructor(res) {
    this.res = res
    this.data = null
    this.status = httpStatus.OK
    this.message = httpStatus[httpStatus.OK]
  }

  /**
   * @param {Object} data
   * @return {Object}
   */
  setData(data) {
    this.data = data
    return this
  }

  /**
   * @param {httpStatus} status
   * @return {Object}
   */
  setStatus(status) {
    this.status = status
    return this
  }

  /**
   * @param {String} message
   * @return {Object}
   */
  setMessage(message) {
    this.message = message
    return this
  }

  /**
   * @return {Object}
   */
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
