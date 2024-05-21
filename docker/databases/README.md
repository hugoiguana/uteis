### Installation
```shell
cd local-environment
make install
```


#### Postgres - access info:
```shell
# Url(outside Docker): jdbc:postgresql://localhost:5432/master
# Url(inside Docker): jdbc:postgresql://db-postgres:5432/master
# username: test
# password: test
docker exec -it db-postgres /bin/sh
docker exec -u root  -it db-postgres psql --host localhost -U test -d test -p 5432
docker exec -u root db-postgres pg_dump -U test -W -d test > postgres/postgres_dump.sql
docker exec -u root db-postgres psql -U test -d test -f /postgres_dump.sql
```
```sql
-- Select UUID
SELECT uuid_generate_v1();

-- Number of connections opened
SELECT count(1) FROM pg_catalog.pg_stat_activity
SELECT usename, count(1) FROM pg_catalog.pg_stat_activity group by usename;

-- Show all namespaces
SELECT * FROM pg_catalog.pg_namespace;

-- Show all Roles/Users
SELECT * FROM pg_catalog.pg_roles order by 1;

-- Show databases:
SELECT * FROM pg_database WHERE datname = 'jg_duren';

-- Show Users:
SELECT * FROM pg_catalog.pg_user;

-- Show relations(tables)
SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';
```


#### Mysql - access info:
https://hub.docker.com/_/mysql
https://dev.mysql.com/doc/refman/8.0/en/mysql-commands.html
```shell
# Url(outside Docker): jdbc:postgresql://localhost:5432/master
# Url(inside Docker): jdbc:postgresql://db-postgres:5432/master
# username: test
# password: test

docker exec -it db-mysql bash
docker exec -u root -it db-mysql mysql -u root -p -h localhost -P 3306 -D test
docker exec -u root -it db-mysql mysql -u test -p -h localhost -P 3306 -D test
docker exec db-mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > mysql/mysql-dump-all-databases.sql
docker exec -i db-mysql sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < mysql/mysql-dump-all-databases.sql
```
select uuid();
SELECT 1;
\h
USE `test`;
show databases;
show tables;
show schemas;
select * from test.test1;
```sql



#### Cassandra - access info
```shell
# Access Cassandra DB Via Docker Exec:
docker exec -it db-cassandra cqlsh -u cassandra -p cassandra
docker exec -it db-cassandra cqlsh -u test -p test

# Execute a ".cql" script file in Cassandra DB container:
docker exec -it db-cassandra cqlsh -u test -p test -f init.cql

# Cassandra DB util commands to execute inside the container:
docker exec -it db-cassandra /bin/bash

CREATE KEYSPACE test_space WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};
SELECT * FROM system_schema.keyspaces;
CREATE USER 'test' WITH PASSWORD 'test';
list users;
GRANT ALL ON KEYSPACE test_space TO 'test';
GRANT CREATE, ALTER, SELECT ON KEYSPACE test_space TO 'test';
SELECT * FROM test_space.table;
```







## Util Docker commands:
```shell
docker compose up -d --build
docker ps | grep db-
docker logs -f db-postgres
docker stop db-cassandra && docker rm db-cassandra && docker volume rm databases_db-cassandra-volume
```

## Util commands:
```shell
# Zip dump SQL file
zip -r dump.zip dump.sql

# Unzip dump file
unzip dump.zip
```
