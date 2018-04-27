-- Create the DB "burgers_db"
CREATE DATABASE burgers_db;
    USE burgers_db;

-- Create the table "burgers" 
CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY(id)
);