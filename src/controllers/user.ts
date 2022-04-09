import { User, UsersModel } from "../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const user = new UsersModel();

export const index = async (_req: Request, res: Response) => {
    try {
        const allUsers = await user.index();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const show = async (req: Request, res: Response) => {
    try {
        const showUser = await user.show(parseInt(req.params.id));
        res.status(200).json(showUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const create = async (req: Request, res: Response) => {
    const newUser: User = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }
    try {
        const createUser = await user.create(newUser);
        const token = jwt.sign({newUser: createUser}, process.env.JWTSECRET as string)
        res.status(200).json(token);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const del = async (req: Request, res: Response) => {
    try {
        const deletedUser = await user.destroy(parseInt(req.params.id));
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const authenticate = async (req: Request, res: Response) => {
    try {
        const authenticUser = await user.authenticate(req.body.username, req.body.password);
        res.status(200).json(authenticUser);
    } catch (error) {
        res.status(400).json(error);
    }
}