const data = require('../data')

module.exports = {
  create: async (req, res) => {
    try {
      const resp = await data.createAmapDb(req.body)
      res.json(resp)
    } catch (e) {
      console.error(e.message)
    }
  },
  update: async (req, res) => {
    const { id } = req.params
    try {
      await data.updateAmapDb(id, req.body)
      res.json("L'amap a bien été mise à jour")
    } catch (e) {
      console.error(e.message)
    }
  },
  read: async (req, res) => {
    const { id } = req.params
    try {
      const resp = await data.readAmapByIdDb(id)
      res.json(resp)
    } catch (e) {
      console.error(e.message)
    }
  },
  readAll: async (req, res) => {
    const { lat, long } = req.params
    try {
      let resp
      if (lat == undefined || long == undefined) {
        resp = await data.readAllAmapsDb()
      }
      else {
        resp = await data.readAllAmapsNearPointDb(lat, long)
      }
      res.json(resp)
    } catch (e) {
      console.error(e.message)
    }
  },
  delete: async (req, res) => {
    const { id } = req.params
    try {
      await data.deleteAmapDb(id)
      res.json("L'amap a bien été suprimée")
    } catch (e) {
      console.error(e.message)
    }
  }
}
