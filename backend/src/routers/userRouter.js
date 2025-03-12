import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

// s'inscrire
userRouter.post("/register", userController.create);

// se connecter
userRouter.post("/login", userController.login);

export default userRouter;
