CREATE USER anas;
ALTER USER anas with encrypted password 'anaspwd';
CREATE DATABASE usersdb OWNER anas;
\connect usersdb

CREATE TABLE users (
    did    SERIAL,
    uname   varchar(40) NOT NULL CHECK (uname <> '')
);

INSERT INTO users (uname) VALUES
    ('Mike');
INSERT INTO users (uname) VALUES
    ('Angel');
INSERT INTO users (uname) VALUES
    ('Kim');
INSERT INTO users (uname) VALUES
    ('Anas');

ALTER TABLE users OWNER to anas;

