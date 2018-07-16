const env = process.env.NODE_ENV || "development";

const baseConfig = {
  environment: process.env.NODE_ENV,
  email: {
    host: "smtp.mailtrap.io",
    username: "f7bae93d3bd4c9",
    password: "45de5b4a79b2ea"
  },
  githubApi: {
    token: "4db0ede54c1dd89579a3e1c50575cfc1b209913a"
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
