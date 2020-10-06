class BaseDAL {
  constructor(model) {
    this.model = model;
  }

  async add(object) {
    try {
      return await this.model.create(object);
    } catch (error) {
      return { error: error.message };
    }
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      return { error: error.message };
    }
  }

  async getById(p_id) {
    try {
      return await this.model.findOne({
        where: { id: p_id },
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  async update(object, p_id) {
    try {
      return await this.model.update(object, {
        where: { id: p_id },
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  async remove(p_id) {
    try {
      return await this.model.destroy({
        where: { id: p_id },
      });
    } catch (error) {
      return { error: error.message };
    }
  }

  async getAllByQuery(query) {
    try {
      return await this.model.findAll({
        where: query,
      });
    } catch (error) {
      return { error: error.message };
    }
  }
}

module.exports = BaseDAL;
