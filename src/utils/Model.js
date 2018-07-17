import Sequelize from "sequelize";

class Model extends Sequelize.Model {
  static init(sequelize) {
    const options = Object.assign(this.params, this.config);
    options.sequelize = sequelize;
    super.init(this.fields, options);
    return this;
  }
}

export default Model;
