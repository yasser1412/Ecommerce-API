CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    firstname VARCHAR(50), 
    lastname VARCHAR(50), 
    email VARCHAR(255) UNIQUE, 
    password VARCHAR, 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);