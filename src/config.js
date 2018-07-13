const env = process.env.NODE_ENV || "development";

const baseConfig = {
  environment: process.env.NODE_ENV,
  email: {
    login: "",
    password: ""
  },
  github: {
    token: ""
  }
};

const config = {
  development: {
    ...baseConfig,
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    ...baseConfig,
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    ...baseConfig,
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}

module.exports = config[env];
