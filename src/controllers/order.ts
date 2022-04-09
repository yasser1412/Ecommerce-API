import { Order, OrdersModel } from '../models/order';
import { Request, Response } from 'express';

const Orders = new OrdersModel();

export const create = async (req: Request, res: Response) => {
  try {
    const order: Order = {
      quantity: req.body.quantity,
      status: 'open',
      user_id: req.body.user_id,
    };
    const newOrder = await Orders.create(order);
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const indexOrdersByUser = async (req: Request, res: Response) => {
  try {
    const user_id = parseInt(req.params.id);
    const orderInfo = await Orders.indexOrdersByUser(user_id);
    res.status(200).json(orderInfo);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const indexCompletedOrders = async (req: Request, res: Response) => {
  try {
    const user_id = parseInt(req.params.id);
    const orderInfo = await Orders.indexCompletedOrders(user_id);
    res.status(200).json(orderInfo);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const del = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const orderInfo = await Orders.destroy(parseInt(id));
    res.status(200).json(orderInfo);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const completeOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const orderInfo = await Orders.completeOrder(parseInt(id));
    res.status(200).json(orderInfo);
  } catch (error) {
    res.status(400).send(error);
  }
};