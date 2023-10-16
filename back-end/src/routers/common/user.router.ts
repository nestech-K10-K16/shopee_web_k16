import { Router } from "express";
import UserController from "../../controllers/user.controller";

const UserRouter = Router();
UserRouter.get("/user", UserController.getList);
UserRouter.get("/user/id/:id", UserController.getById);

export default UserRouter