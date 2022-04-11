CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    status VARCHAR(50),
    order_id INTEGER REFERENCES orders(id)
);