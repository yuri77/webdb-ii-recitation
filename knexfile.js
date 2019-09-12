// Update with your config settings.
//knex creates connection file even when it does not exist

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/db.sqlite3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
