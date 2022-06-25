module.exports = class COOKIE {
  /**
   * @param {Request} request target string.
   * @return {Object}
   */
  static parse(request) {
    const cookie = {}
    const cookies = request.headers['set-cookie']

    // maping cookies
    cookies.forEach((rc, i) => {
      // split detail cookie to array
      const splitCookie = rc.split(';')
      // set cookie key & value
      const splitKeyCookie = splitCookie.shift().trim().split('=')
      const cookieKey = splitKeyCookie.shift().trim()
      const cookieValue = decodeURI(splitKeyCookie.join('='))
      // set option cookie
      const option = {}
      splitCookie.forEach((o) => {
        const parts = o.split('=')
        option[parts.shift().trim()] = decodeURI(parts.join('='))
      })
      // grouping cookie by key
      cookie[cookieKey] = {
        value: cookieValue,
        option,
      }
    })

    return cookie
  }
}
