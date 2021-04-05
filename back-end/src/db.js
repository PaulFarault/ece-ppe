const Pool = require("pg").Pool

module.exports = new Pool({
  user: "user",
  password: "password",
  database: "amap",
  host: "localhost",
  port: 5432
})