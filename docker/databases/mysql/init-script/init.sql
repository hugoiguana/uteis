CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS test.test1 (
    id varchar(36) NOT NULL,
    description varchar(255) NOT NULL,
    created_date timestamp,
    created_by varchar(255),
    priority int,
    enable boolean DEFAULT true,
    PRIMARY KEY (id)
);