import { Express } from "express";
import UserRouter from "./common/user.router";
import RoleRouter from "./common/role.router";
import ProductRouter from "./common/product.router";

const router = [UserRouter, RoleRouter, ProductRouter]

const Router = (app: Express) => {
    app.use("/", router.map(item => item))
}

export default Router