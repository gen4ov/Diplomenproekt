CREATE DATABASE diplomna;

USE diplomna;

CREATE TABLE contacts (
   id int auto_increment primary key,
   name varchar(255) not null,
   email varchar(255) not null,
   message varchar(255) not null
   );