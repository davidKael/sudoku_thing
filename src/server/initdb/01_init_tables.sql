CREATE TABLE stuff (
  id SERIAL PRIMARY KEY,
  name text UNIQUE NOT NULL,
  level int NOT NULL default 0,
  is_alive boolean not null default true
);
