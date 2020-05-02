CREATE DATABASE burgers_db;

USE burgers_db;

-- DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;