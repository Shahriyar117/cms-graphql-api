require("dotenv").config();
const {
  DB_UNAME,
  DB_PASSWORD,
  DB_HOST,
  DATABASE_NAME,
  TEST_DB_UNAME,
  TEST_DB_PASSWORD,
  TEST_DATABASE_NAME,
  TEST_DB_HOST,
} = process.env;

module.exports = {
  development: {
    username: DB_UNAME,
    password: DB_PASSWORD,
    database: DATABASE_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: TEST_DB_UNAME,
    password: TEST_DB_PASSWORD,
    database: TEST_DATABASE_NAME,
    host: TEST_DB_HOST,
    dialect: "postgres",
    migrationStorageTableName: "migrations", // Override default migration storage table name by define here
  },
  production: {
    username: DB_UNAME,
    password: DB_PASSWORD,
    database: DATABASE_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
};
