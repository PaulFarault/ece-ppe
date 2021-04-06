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
  readAll: async (ignore, res) => {
    try {
      const resp = await data.readAllAmapsDb()
      res.json(resp)
    } catch (e) {
      console.error(e.message)
    }
  },
  readAllPerim: async(ignore,res) => {
    try {
      const resp = await data.readAllAmapPerimeter(req.body)
      res.json(resp)
    } catch(e) {
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
