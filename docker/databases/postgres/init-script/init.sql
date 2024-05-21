CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "btree_gist";

CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS test.test1 (
    id uuid NOT NULL,
    description character varying NOT NULL,
    created_date timestamp without time zone,
    created_by character varying,
    priority integer,
    enable boolean DEFAULT true
);