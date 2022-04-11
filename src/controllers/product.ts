import { Product, ProductsModel } from '../models/product';
import { Request, Response } from 'express';

const Products = new ProductsModel();

export const index = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const allProducts = await Products.index();
    return res.status(200).send(allProducts);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const show = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id;
    const showProduct = await Products.show(parseInt(id));
    return res.status(200).send(showProduct);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newProduct: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const createProduct = await Products.create(newProduct);
    return res.status(200).send(createProduct);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const Product: Product = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const newProduct = await Products.update(Product);
    return res.status(200).send(newProduct);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const del = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id;
    const deletedProduct = await Products.destroy(parseInt(id));
    return res.status(200).send(deletedProduct);
  } catch (error) {
    return res.status(400).send(error);
  }
};
