import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export async function verifyUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
}
