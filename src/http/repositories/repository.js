/** */
class Repository {
  /**
   * @param {Model} model
   * @param {Array} includeModel array relation name such as packages.
  */
  constructor(model, includeModel) {
    this.model = model
    this.includeModel = includeModel
  }

  /**
   * @param {Object} where
   * @return {Promise} array
  */
  findAll(where) {
    return this.model.findAll({
      include: this.includeModel,
      where,
    }).then((res) => res).catch((err) => {
      console.log('Error :', err)
      return []
    })
  }

  /**
   * @param {Object} where
   * @return {Promise} object | null
  */
  findOne(where) {
    return this.model.findOne({
      include: this.include,
      where,
    }).then((res) => res).catch((err) => {
      console.log('Error :', err)
      return null
    })
  }

  /**
   * @param {Object} data
   * @return {Promise} object | null
  */
  create(data = {}) {
    return this.model.create(data).then((res) => res.dataValues).catch((err) => {
      console.log('Error :', err)
      return null
    })
  }
}

module.exports = Repository
