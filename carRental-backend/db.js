const { Pool } = require("pg");
const pool = new Pool({
  user: "swarachokshi",
  host: "localhost",
  database: "carrental",
  password: "",
  port: 5432,
});
module.exports = pool;