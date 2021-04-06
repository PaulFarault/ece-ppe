-- Creation of amap table
CREATE TABLE amap (
  amap_id SERIAL NOT NULL,
  amap_name VARCHAR(250) DEFAULT NULL,
  amap_address VARCHAR(2502) DEFAULT NULL,
  latitude FLOAT(8) NOT NULL,
  longitude FLOAT(8) NOT NULL,
  geography POINT,
  PRIMARY KEY(amap_id)
);