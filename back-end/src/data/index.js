const db = require('../db')

module.exports = {
  // Create a new amap
  createAmapDb: async (
    { name, address, lat, long }
  ) => {
    const res = await db.query(
      `INSERT INTO amap(amap_name, amap_address, latitude, longitude, geography)
      VALUES ($1, $2, $3, $4, ST_SetSRID(ST_MakePoint($3,$4), 4326))
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

  // Read all amap closest to a certain point
  readAllAmapsNearPointDb: async (
    lat, long
  ) => {
    const res = await db.query(
      `SELECT * , ST_Distance(geography, ref_geo) AS distance
      FROM amap
      CROSS JOIN (SELECT ST_MakePoint($1, $2)::geography AS ref_geo) as r
      WHERE ST_DWithin(geography, ref_geo, 200000)  
      ORDER BY ST_Distance(geography, ref_geo);`,
      [lat, long]
    )
    return res.rows
  }

}
