const db = require('../db')

module.exports = {
  // Create a new amap
  createAmapDb: async (
    { name, address, lat, long }
  ) => {
    const res = await db.query(
      `INSERT INTO amap(amap_name, amap_address, latitude, longitude, geography)
      VALUES ($1, $2, $3, $4, ST_SetSRID(ST_MakePoint($4,$3), 4326))
      RETURNING *`,
      [name, address, lat, long]
    )
    return res.rows[0]
  },

  // Read all amap
  readAllAmapsDb: async () => {
    const res = await db.query(
      `SELECT * FROM amap`
    )
    return res.rows
  },

  // Read an amap by id
  readAmapByIdDb: async (
    id
  ) => {
    const res = await db.query(
      `SELECT * FROM amap WHERE amap_id = $1`,
      [id]
    )
    return res.rows[0]
  },

  // Update an amap by id
  updateAmapDb: async (
    id, { name, address, lat, long }
  ) => {
    await db.query(
      `UPDATE amap
      SET amap_name = $1, amap_address = $2, latitude = $3, longitude = $4
      WHERE amap_id = $5`,
      [name, address, lat, long, id]
    )
  },

  // Delete an amap by id
  deleteAmapDb: async (
    id
  ) => {
    await db.query(
      `DELETE FROM amap WHERE amap_id = $1`,
      [id]
    )
  },

  //get the amaps in a certain distance
  readAllAmapPerimeter: async(
    {long, lat}
  ) => {

    await db.query(
      `SELECT name
      FROM (
         SELECT name, ST_Distance(ST_SetSRID(ST_MakePoint($1, $2),4326), a.geography) as distance
         FROM amap a,
         WHERE distance < 15000
       )`,
       [long,lat]
    )

    return res.rows
  },

  //Read an amap by amap_name
  readAmapByName: async(
    name
  ) => {
    const res = await db.query(
      `SELECT * FROM amap WHERE amap_name= $1`,
      [amap_name]
    )
    return res.rows[0]
  }


  //TODO Read some amap near to a location
}
