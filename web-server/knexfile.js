const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'db');
// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'any_do_dev',
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'any_do_test',
      user:     process.env.DB_USER,
      dramaturg: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'any_do_test',
      user:     process.env.DB_USER,
      dramaturg: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'any_do_dev',
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
