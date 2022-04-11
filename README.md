# Ecommerce-API

[About project](#Description)

[Instructions](#How-To-Use)

[Scripts](#Scripts)

[End Points](#EndPoints)
## Description
    A node-express-typescript application providing restful api endpoints to manage users, products and user orders for an Ecommerce application.

 ## How To Use

 - clone the repository
- run `npm install`
- create .env file at the root directory that contains the following:
  ```
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
- create a database.json file at the root directory that contains the following:

  ```
  {
    "dev": {
      "driver": "pg",
      "host": "{your postgresql database host}",
      "database": "{your postgresql database name}",
      "user": "{your postgresql database user}",
      "password": "{your postgresql database password}",
    },
    "test": {
      "driver": "pg",
      "host": "{your postgresql database host}",
      "database": "{your test postgresql database name}",
      "user": "{your postgresql database user}",
      "password": "{your postgresql database password}",
    },
  }

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
| GET | /api/orders/orderbyuser/:id | Current Order by user (args: user id)[token required] |
| GET | /api/orders/completedorders/:id | Completed Orders by user (args: user id)[token required] |
| POST | /api/orders | Create [token required] |
| PUT | /api/orders/completeorder/:id | Update order to complete [token required] |
| DELETE | /api/orders/:id | Delete [token required] |
| POST | /api/auth | Authenticate/Login |
