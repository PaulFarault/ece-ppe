FROM postgres:13

LABEL maintainer="PostGIS Project - https://postgis.net"

ENV POSTGIS_VERSION 3

RUN apt-get update \
  && apt-cache showpkg postgresql-$PG_MAJOR-postgis-$POSTGIS_VERSION \
  && apt-get install -y --no-install-recommends \
  postgresql-$PG_MAJOR-postgis-$POSTGIS_VERSION \
  postgresql-$PG_MAJOR-postgis-$POSTGIS_VERSION-scripts \
  && rm -rf /var/lib/apt/lists/*

# add init script
RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./sql/initdb-postgis.sql /docker-entrypoint-initdb.d/10_postgis.sql
COPY ./sql/initdb-table.sql /docker-entrypoint-initdb.d/20_table.sql