--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

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

ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.purchases DROP CONSTRAINT purchases_pkey;
ALTER TABLE ONLY public.messages DROP CONSTRAINT messages_pkey;
ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_pkey;
ALTER TABLE ONLY public.lisitings DROP CONSTRAINT lisitings_pkey;
ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_pkey;
ALTER TABLE ONLY public.chats DROP CONSTRAINT chats_pkey;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.purchases ALTER COLUMN "purchaseId" DROP DEFAULT;
ALTER TABLE public.messages ALTER COLUMN "messageId" DROP DEFAULT;
ALTER TABLE public.locations ALTER COLUMN "locationId" DROP DEFAULT;
ALTER TABLE public.lisitings ALTER COLUMN "lisitingId" DROP DEFAULT;
ALTER TABLE public.favorites ALTER COLUMN "favoriteId" DROP DEFAULT;
ALTER TABLE public.chats ALTER COLUMN "chatId" DROP DEFAULT;
DROP SEQUENCE public."users_userId_seq";
DROP TABLE public.users;
DROP SEQUENCE public."purchases_purchaseId_seq";
DROP TABLE public.purchases;
DROP SEQUENCE public."messages_messageId_seq";
DROP TABLE public.messages;
DROP SEQUENCE public."locations_locationId_seq";
DROP TABLE public.locations;
DROP SEQUENCE public."lisitings_lisitingId_seq";
DROP TABLE public.lisitings;
DROP SEQUENCE public."favorites_favoriteId_seq";
DROP TABLE public.favorites;
DROP SEQUENCE public."chats_chatId_seq";
DROP TABLE public.chats;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: chats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.chats (
    "chatId" integer NOT NULL,
    "customerId" integer NOT NULL,
    "lisitingId" integer NOT NULL
);


--
-- Name: chats_chatId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."chats_chatId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: chats_chatId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."chats_chatId_seq" OWNED BY public.chats."chatId";


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.favorites (
    "favoriteId" integer NOT NULL,
    "listingId" integer NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: favorites_favoriteId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."favorites_favoriteId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: favorites_favoriteId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."favorites_favoriteId_seq" OWNED BY public.favorites."favoriteId";


--
-- Name: lisitings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lisitings (
    "lisitingId" integer NOT NULL,
    "sellerId" integer NOT NULL,
    "locationId" integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    price integer NOT NULL,
    "imageUrl" text NOT NULL
);


--
-- Name: lisitings_lisitingId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."lisitings_lisitingId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lisitings_lisitingId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."lisitings_lisitingId_seq" OWNED BY public.lisitings."lisitingId";


--
-- Name: locations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.locations (
    "locationId" integer NOT NULL,
    name text NOT NULL,
    "imageUrl" text NOT NULL
);


--
-- Name: locations_locationId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."locations_locationId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: locations_locationId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."locations_locationId_seq" OWNED BY public.locations."locationId";


--
-- Name: messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.messages (
    "messageId" integer NOT NULL,
    "chatId" integer NOT NULL,
    "senderId" integer NOT NULL,
    "recpientId" integer NOT NULL,
    content text NOT NULL,
    "sentAt" timestamp with time zone NOT NULL
);


--
-- Name: messages_messageId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."messages_messageId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: messages_messageId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."messages_messageId_seq" OWNED BY public.messages."messageId";


--
-- Name: purchases; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.purchases (
    "purchaseId" integer NOT NULL,
    "customerId" integer NOT NULL,
    "lisitingId" integer NOT NULL
);


--
-- Name: purchases_purchaseId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."purchases_purchaseId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: purchases_purchaseId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."purchases_purchaseId_seq" OWNED BY public.purchases."purchaseId";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    username text NOT NULL,
    "imageUrl" text NOT NULL
);


--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- Name: chats chatId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chats ALTER COLUMN "chatId" SET DEFAULT nextval('public."chats_chatId_seq"'::regclass);


--
-- Name: favorites favoriteId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorites ALTER COLUMN "favoriteId" SET DEFAULT nextval('public."favorites_favoriteId_seq"'::regclass);


--
-- Name: lisitings lisitingId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lisitings ALTER COLUMN "lisitingId" SET DEFAULT nextval('public."lisitings_lisitingId_seq"'::regclass);


--
-- Name: locations locationId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.locations ALTER COLUMN "locationId" SET DEFAULT nextval('public."locations_locationId_seq"'::regclass);


--
-- Name: messages messageId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages ALTER COLUMN "messageId" SET DEFAULT nextval('public."messages_messageId_seq"'::regclass);


--
-- Name: purchases purchaseId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.purchases ALTER COLUMN "purchaseId" SET DEFAULT nextval('public."purchases_purchaseId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.chats ("chatId", "customerId", "lisitingId") FROM stdin;
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.favorites ("favoriteId", "listingId", "userId") FROM stdin;
\.


--
-- Data for Name: lisitings; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.lisitings ("lisitingId", "sellerId", "locationId", title, description, price, "imageUrl") FROM stdin;
\.


--
-- Data for Name: locations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.locations ("locationId", name, "imageUrl") FROM stdin;
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.messages ("messageId", "chatId", "senderId", "recpientId", content, "sentAt") FROM stdin;
\.


--
-- Data for Name: purchases; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.purchases ("purchaseId", "customerId", "lisitingId") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", username, "imageUrl") FROM stdin;
\.


--
-- Name: chats_chatId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."chats_chatId_seq"', 1, false);


--
-- Name: favorites_favoriteId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."favorites_favoriteId_seq"', 1, false);


--
-- Name: lisitings_lisitingId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."lisitings_lisitingId_seq"', 1, false);


--
-- Name: locations_locationId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."locations_locationId_seq"', 1, false);


--
-- Name: messages_messageId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."messages_messageId_seq"', 1, false);


--
-- Name: purchases_purchaseId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."purchases_purchaseId_seq"', 1, false);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_userId_seq"', 1, false);


--
-- Name: chats chats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT chats_pkey PRIMARY KEY ("chatId");


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY ("favoriteId");


--
-- Name: lisitings lisitings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lisitings
    ADD CONSTRAINT lisitings_pkey PRIMARY KEY ("lisitingId");


--
-- Name: locations locations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY ("locationId");


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY ("messageId");


--
-- Name: purchases purchases_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT purchases_pkey PRIMARY KEY ("purchaseId");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("userId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

