import { completeOrder, create, indexOrdersByUser, del, indexCompletedOrders } from '../controllers/order';
import { Router } from 'express';
import { verifyUser } from '../middlewares/auth';

export const orders: Router = Router();

orders.post('/', verifyUser, create);
orders.put('/completeorder', verifyUser, completeOrder);
orders.get('/orderbyuser/:id', verifyUser, indexOrdersByUser);
orders.get('/completedorder/:id', verifyUser, indexCompletedOrders);
orders.delete('/:id', verifyUser, del);