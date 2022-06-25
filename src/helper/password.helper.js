const crypto = require('crypto')

/** */
class PASSWORD {
  /**
   * @param {String} string target string.
   * @return {String} string sha256.
   */
  static generate(string) {
    return crypto.createHmac('sha256', string).digest('hex')
  }

  /**
   * @param {String} string
   * @param {String} hashString
   * @return {Boolean}
   */
  static verify(string, hashString) {
    if (hashString === this.generate(string)) {
      return true
    }

    return false
  }
}

module.exports = PASSWORD
