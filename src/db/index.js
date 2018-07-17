import Sequelize from "sequelize";
import importDir from "import-dir";
import config from "../config";

const pool = {
  handleDisconnects: true,
  min: 1,
  max: 10,
  idle: 10000
};

const sequelize = new Sequelize(
  config.database, 
  config.username,
  config.password, 
  {
    dialect: config.dialect,
    host: config.host,
    pool,
    logging: false
  }
);

const models = importDir("./models");

Object.keys(models).forEach(model => {
  models[model] = models[model].init(sequelize);
});

Object.keys(models).forEach(model => {
  if (typeof models[model].associate === "function") {
    models[model].associate(models);
  }
});
  
export default models;
  
  