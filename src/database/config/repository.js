/** */
class Repository {
  /**
   * @param {Model} model
   * @param {Array<Model>} relationModel array relation name such as packages.
  */
  constructor(model, relationModel) {
    this.model = model
    this.relationModel = relationModel
  }

  /**
   * @param {Object} where
   * @return {Promise} array
  */
  async findAll(where) {
    return this.model.findAll({
      include: this.relationModel,
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
  async findOne(where) {
    return this.model.findOne({
      include: this.relationModel,
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
  async create(data = {}) {
    return this.model.create(data).then((res) => res.dataValues).catch((err) => {
      console.log('Error :', err)
      return null
    })
  }
}

module.exports = Repository
