import {
  completeOrder,
  create,
  indexOrdersByUser,
  del,
  indexCompletedOrders,
  index,
  show,
} from '../controllers/order';
import { Router } from 'express';
import { verifyUser } from '../middlewares/auth';

export const orders: Router = Router();

orders.get('/', verifyUser, index);
orders.post('/', verifyUser, create);
orders.put('/completeorder/:id', verifyUser, completeOrder);
orders.get('/:id', verifyUser, show);
orders.get('/orderbyuser/:id', verifyUser, indexOrdersByUser);
orders.get('/completedorders/:id', verifyUser, indexCompletedOrders);
orders.delete('/:id', verifyUser, del);
