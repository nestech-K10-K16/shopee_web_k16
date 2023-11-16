import { Express } from "express";
import UserRouter from "./common/user.router";
import ProductRouter from "./common/product.router";
import CustomerRouter from "./common/customer.router";
import BillRouter from "./common/bill.router";
import BillDetailRouter from "./common/billDetail.router";
import CartRouter from "./common/cart.router";

const router = [UserRouter, ProductRouter, CartRouter, CustomerRouter, BillRouter, BillDetailRouter]

const Router = (app: Express) => {
    app.use("/", router.map(item => item))
}

export default Router