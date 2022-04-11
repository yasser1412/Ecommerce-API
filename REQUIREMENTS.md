# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
### Products

| HTTP verbs | paths | Used for |
| ---------- | ----- | -------- |
| GET | /api/products | Index |
| GET | /api/products/:id | Show |
| POST | /api/prodcts | Create [token required] |
| PUT | /api/products | Update [token required] |
| DELETE | /api/products/:id | Delete [token required] |
### Users

| HTTP verbs | paths | Used for |
| ---------- | ----- | -------- |
| GET | /api/users | Index [token required] |
| GET | /api/users/:id | Show [token required] |
| POST | /api/users | Create |
| DELETE | /api/users/:id | Delete [token required] |
### Orders

| HTTP verbs | paths | Used for |
| ---------- | ----- | -------- |
| GET | /api/orders | Index [token required]|
| GET | /api/orders/:id | Show [token required]|
| GET | /api/orders/orderbyuser/:id | Current Order by user (args: user id)[token required] |
| GET | /api/orders/completedorders/:id | completed Orders by user (args: user id)[token required] |
| POST | /api/orders | Create [token required] |
| PUT | /api/orders/completeorder/:id | Update order to complete [token required] |
| DELETE | /api/orders/:id | Delete [token required] |


## Data Shapes
#### Product
-  id | integar
- name | VARCHAR(255)
- price | integar 
- category | VARCHAR(255)

#### User
- id | integar
- firstName | VARCHAR(50)
- lastName | VARCHAR(50)
- email | VARCHAR(255) UNIQUE
- password | VARCHAR
- created_at | TIMESTAMPTZ 

#### Orders
- id | integar
- id of each product in the order | integar
- quantity of each product in the order | integar
- user_id | integar
- status of order (active or complete) | VARCHAR(50)

