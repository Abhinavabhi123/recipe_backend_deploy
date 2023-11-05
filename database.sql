-- Run these commands in the sql terminal

1) CREATE DATABASE  recipe;

2) \c recipe;

3) CREATE TABLE  users (
    id serial PRIMARY KEY NOT NULL,
    name VARCHAR (80) NOT NULL,
    email VARCHAR (100) NOT NULL,
    image  VARCHAR (200) NOT Null,
    recipes text[] UNIQUE 
   );
