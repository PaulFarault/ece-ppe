const express = require("express")
const routes = require('./routes')

const app = express()

module.exports = app
  .use(express.json()) // => req.body
  .get('/', (ignore, res) => { res.send('<h1>Back-end</h1>') })
  .use('/', routes)