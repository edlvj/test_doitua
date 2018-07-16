const env = process.env.NODE_ENV || "development";

const baseConfig = {
  environment: process.env.NODE_ENV,
  email: {
    host: "smtp.mailtrap.io",
    username: "f7bae93d3bd4c9",
    password: "45de5b4a79b2ea"
  },
  githubApi: {
    token: "0f58aaf39edeb58227ce2eb3e6f896494333f713"
  },
  weatherApi: {
    token: "c474b15b4d2e83d6fa0cc87ee2353d92"
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
