module.exports = class MemberResource {
  /**
   * @param {Object} data
   * @return {Promise} object
   */
  static resource(data) {
    return {
      id: data.id,
      avatar: data.avatar,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    }
  }
}
