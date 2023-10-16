import { Router } from "express";
import RoleController from "../../controllers/role.controller";

const RoleRouter = Router()
RoleRouter.get("/role", RoleController.getList)

export default RoleRouter