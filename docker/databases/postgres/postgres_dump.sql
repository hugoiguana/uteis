--
-- PostgreSQL database dump
--

-- Dumped from database version 12.19 (Debian 12.19-1.pgdg120+1)
-- Dumped by pg_dump version 12.19 (Debian 12.19-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: test; Type: SCHEMA; Schema: -; Owner: test
--

CREATE SCHEMA test;


ALTER SCHEMA test OWNER TO test;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: test1; Type: TABLE; Schema: test; Owner: test
--

CREATE TABLE test.test1 (
    id uuid NOT NULL,
    description character varying NOT NULL,
    created_date timestamp without time zone,
    created_by character varying,
    priority integer,
    enable boolean DEFAULT true
);


ALTER TABLE test.test1 OWNER TO test;

--
-- Data for Name: test1; Type: TABLE DATA; Schema: test; Owner: test
--

COPY test.test1 (id, description, created_date, created_by, priority, enable) FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

