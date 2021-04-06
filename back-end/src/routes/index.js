const express = require("express")
const controller = require("../controllers")

const router = express.Router()

module.exports = router
  .post('/amap', controller.create)
  .get('/amaps/:lat/:long', controller.readAll)
  .get('/amap/:id', controller.read)
  .delete('/amap/:id', controller.delete)
  .put('/amap/:id', controller.update)
