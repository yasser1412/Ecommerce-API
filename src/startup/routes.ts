import express from 'express';
import { auth } from './../routes/auth';
import { users } from './../routes/users';
import { products } from './../routes/products';
import { orders } from './../routes/orders';

export default function (app: express.Application): void {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/products', products);
  app.use('/api/orders', orders);
}
