-- Documentations:
https://www.postgresql.org/docs/17/index.html
https://www.postgresql.org/docs/current/queries-union.html
https://www.postgresql.org/docs/current/queries-with.html
https://www.postgresql.org/docs/current/functions-conditional.html#FUNCTIONS-COALESCE-NVL-IFNULL
https://www.postgresql.org/docs/current/using-explain.html
https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan

-- Extensions:
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "btree_gist";

-- Select UUID
SELECT uuid_generate_v1();
select uuid_generate_v4();
select gen_random_uuid();
select gen_random_uuid()::text;
select now()::date;
select current_timestamp;
select current_timestamp::date;
select current_timestamp::date as dt where current_timestamp::date = '2024-11-13';

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

select text from
    (select 'abc' as text) as query
where text like '_b_';

select text from
    (select 'abc' as text) as query
where text like '%b|c%' escape '|';
