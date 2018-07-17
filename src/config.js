const env = process.env.NODE_ENV || "development";

const baseConfig = {
  environment: process.env.NODE_ENV,
  jwt: {
    secret: "testdoit",
    tokenExpireTime: 900
  },
  email: {
    host: "smtp.mailtrap.io",
    username: "f7bae93d3bd4c9",
    password: "45de5b4a79b2ea"
  },
  githubApi: {
    token: "f09b42950aedddea16ed2be9aa0a285dc46848a6"
  },
  weatherApi: {
    token: "c474b15b4d2e83d6fa0cc87ee2353d92"
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
