import express from 'express';
import { auth } from './../routes/auth';
import { users } from './../routes/users';
import { products } from './../routes/products';

export default function (app: express.Application): void {
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/products', products);
}
