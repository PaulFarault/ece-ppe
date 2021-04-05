-- Creation of amap table
CREATE TABLE amap (
  amap_id INT NOT NULL,
  amap_name VARCHAR(250) DEFAULT NULL,
  amap_address VARCHAR(2502) DEFAULT NULL,
  latitude INT NOT NULL,
  longitude INT NOT NULL,
  geography POINT,
  PRIMARY KEY(amap_id)
);