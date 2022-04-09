CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    status VARCHAR(50),
    user_id INTEGER REFERENCES users(id)
);