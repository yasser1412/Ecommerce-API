import {authenticate} from "./../controllers/user";
import { Router } from "express";
export const auth: Router = Router();

auth.post("/", authenticate);