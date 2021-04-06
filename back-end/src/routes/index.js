const express = require("express")
const controller = require("../controllers")

const router = express.Router()

module.exports = router
  .post('/amap', controller.create)
  .get('/amap', controller.readAll)
  .get('/amap/:id', controller.read)
  .delete('/amap/:id', controller.delete)
  .put('/amap/:id', controller.update)
  .get('/amap/perim', controller.readAllPerim)
