import { Router } from "express";

import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;