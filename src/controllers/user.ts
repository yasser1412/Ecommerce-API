import { User, UsersModel } from '../models/user';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { isNull } from 'util';
dotenv.config();

const user = new UsersModel();

const generateAuthToken = function (user: User): string {
  return jwt.sign(
    { firstname: user.firstname, lastname: user.lastname, email: user.email },
    process.env.JWT_SECRET as string
  );
};

export const index = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const allUsers = await user.index();
    return res.status(200).send(allUsers);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const show = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = req.params.id;
    const showUser = await user.show(parseInt(id));
    return res.status(200).send(showUser);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser: User = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const createUser = (await user.create(newUser));
    const token = generateAuthToken(createUser as User);
    return res.status(200).send(token);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const del = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletedUser = await user.destroy(parseInt(req.params.id));
    return res.status(200).send(deletedUser);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const authenticate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const authenticUser = (await user.authenticate(
      req.body.email,
      req.body.password
    )) as User;
    const token = generateAuthToken(authenticUser);
    return res.header('x-auth-token', token).status(200).send(token);
  } catch (error) {
    return res.status(400).send(error);
  }
};
