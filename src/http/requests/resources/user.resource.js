/** */
class UserResource {
  /**
   * @param {Object} data
   * @return {Object} object
   */
  static resource(data) {
    return {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    }
  }
}

module.exports = UserResource
