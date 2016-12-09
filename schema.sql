CREATE DATABASE wish_saver_db;
USE wish_saver_db;

-- Create the table events.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('wish 1');
INSERT INTO wishes (wish) VALUES ('to do something');
INSERT INTO wishes (wish) VALUES ('To fly');