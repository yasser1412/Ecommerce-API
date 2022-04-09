import {index, create, del, show} from "../controllers/user";
import { Router } from "express";
import  { verifyUser }  from "../middlewares/auth";

export const users: Router = Router();

users.get("/", verifyUser, index);
users.post("/", create);
users.get("/:id", verifyUser, show);
users.delete("/:id", verifyUser, del);