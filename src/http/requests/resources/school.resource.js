/** */
class SchoolResource {
  /**
   * @param {Object} data
   * @return {Object} object
   */
  static resource(data) {
    return {
      id: data.id,
      name: data.name,
      city: data.city,
      latLon: data.latLon,
      accreditation: data.accreditation,
    }
  }
}

module.exports = SchoolResource
