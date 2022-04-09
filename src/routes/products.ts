import { index, create, update, del, show } from '../controllers/product';
import { Router } from 'express';
import { verifyUser } from '../middlewares/auth';

export const products: Router = Router();

products.get('/', index);
products.post('/', verifyUser, create);
products.put('/', verifyUser, update);
products.get('/:id', show);
products.delete('/:id', verifyUser, del);
