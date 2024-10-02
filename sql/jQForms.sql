CREATE DATABASE fendproject_db;

USE fendproject_db;

CREATE TABLE users (
  id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  email VARCHAR(320) NOT NULL,
  password VARCHAR(255) NOT NULL,
  retypePassword VARCHAR(50) NOT NULL,
  phone INT(20) NOT NULL,
  dateOfBirth DATE NOT NULL UNIQUE,
  street VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  province VARCHAR(100) NOT NULL
);