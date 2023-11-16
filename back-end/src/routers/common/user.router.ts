import { Router } from "express";
import UserController from "../../controllers/user.controller";
import userMiddleware from "../../middlewares/user.middleware";
import JwtAcion from "../../middlewares/jwtAction.middleware";

const UserRouter = Router();
UserRouter.get("/user", UserController.getList);
UserRouter.get("/user/id/:id", UserController.getById);
UserRouter.get("/user/role", UserController.getListRole);
UserRouter.post("/user/create", userMiddleware.checkCreate, UserController.create);
UserRouter.put("/user/update", userMiddleware.checkEdit, UserController.edit);
UserRouter.delete("/user/delete/:id", UserController.remove);
UserRouter.post("/user/login", userMiddleware.checkLogin, UserController.handleLogin);
UserRouter.get("/user/logout", UserController.hanldeLogout);
UserRouter.get("/user/refresh-login", JwtAcion.checkTokenUser, UserController.refreshLogin);
UserRouter.post("/user/register", userMiddleware.checkRegister, UserController.hanldeRegister);

export default UserRouter