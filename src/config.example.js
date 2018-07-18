const env = process.env.NODE_ENV || "development";

const baseConfig = {
  environment: process.env.NODE_ENV,
  appUrl: 'http://localhost:4000',
  jwt: {
    secret: "testdoit",
    tokenExpireTime: 900
  },
  email: {
    host: "localhost",
    username: "test",
    password: "password"
  },
  githubApi: {
    token: "token"
  },
  weatherApi: {
    token: "token"
  }
};

const config = {
  development: {
    ...baseConfig,
    username: "testdoit",
    password: "testdoit",
    database: "testdoit_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    ...baseConfig,
    username: "testdoit",
    password: "testdoit",
    database: "testdoit_test",
    host: "127.0.0.1",
    dialect: "postgres" 
  },
  production: {
    ...baseConfig,
    username: "testdoit",
    password: "testdoit",
    database: "testdoit_production",
    host: "127.0.0.1",
    dialect: "postgres" 
  }
}

module.exports = config[env];