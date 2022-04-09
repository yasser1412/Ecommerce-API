import { Product, ProductsModel } from '../models/product';
import { Request, Response } from 'express';

const Products = new ProductsModel();

export const index = async (_req: Request, res: Response) => {
  try {
    const allProducts = await Products.index();
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const showProduct = await Products.show(parseInt(id));
    res.status(200).send(showProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newProduct: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const createProduct = await Products.create(newProduct);
    res.status(200).send(createProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const Product: Product = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const newProduct = await Products.update(Product);
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const del = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Products.destroy(parseInt(id));
    res.status(200).send(deletedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};