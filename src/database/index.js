import Sequelize from 'sequelize';

import Model from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Model];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
