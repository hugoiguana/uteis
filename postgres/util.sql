
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


-------------------------------------------------------------------------------------------