# Ecommerce-API

[About project](#Description)

[Instructions](#How-To-Use)

[Database Setup](#Database-Setup)

[Scripts](#Scripts)

[End Points](#EndPoints)

## Description

A node-express-typescript application providing restful api endpoints to manage users, products and user orders for an Ecommerce application.

## Database Setup

The server application is configured to run with a Postgresql database running with the following settings:

- Host: localhost
- Port: 5432
- Database user: "postgres"
- Database name: "store_dev"
- Test database name: "store_test"
- Create the database for devolpment and testing

## How To Use

- clone the repository
- run `npm install`
- create .env file at the root directory that contains the following:

  ```text
  DB_HOST={your postgresql database host}
  DB_NAME={your postgresql database name}
  TEST_DB_NAME={your postgresql test database name}
  DB_USER={your postgresql database user}
  DB_PASSWORD={your postgresql database password}
  JWT_SECRET={your jwt secret}
  ENV=dev
  BCRYPT_PASSWORD={your bcrypt password}
  SALT_ROUNDS=10

  ```

- install db-migrate globally by running `npm install -g db-migrate`
- run `db-migrate up` to create the database tables
- run `npm run watch`

## Scripts

- To Run The Server:
`npm run start`
- To Run Tests:
`npm run test`
- To Run prettier:
`npm run prettier`
- To Run EsLint:
`npm run lint`

## EndPoints

| HTTP verbs | paths | Used for |
| ---------- | ----- | -------- |
| GET | /api/products | Index |
| GET | /api/products/:id | Show |
| POST | /api/prodcts | Create [token required] |
| PUT | /api/products | Update [token required] |
| DELETE | /api/products/:id | Delete [token required] |
| GET | /api/users | Index [token required] |
| GET | /api/users/:id | Show [token required] |
| POST | /api/users | Create |
| DELETE | /api/users/:id | Delete [token required] |
| GET | /api/orders | Index [token required]|
| GET | /api/orders/:id | Show [token required]|
| GET | /api/orders/orderbyuser/:id | Current Order by user [args: user id](token required) |
| GET | /api/orders/completedorders/:id | Completed Orders by user [args: user id](token required) |
| POST | /api/orders | Create [token required] |
| PUT | /api/orders/completeorder/:id | Update order to complete [token required] |
| DELETE | /api/orders/:id | Delete [token required] |
| POST | /api/auth | Authenticate/Login |
