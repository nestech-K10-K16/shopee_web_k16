import { Router } from "express";
import CustomerController from "../../controllers/customer.controller";
import CustomerMiddleware from "../../middlewares/customer.middleware";

const CustomerRouter = Router();
CustomerRouter.get("/customer", CustomerController.getList);
CustomerRouter.get("/customer/id/:id", CustomerController.getById);
CustomerRouter.post("/customer/create", CustomerMiddleware.checkCreate, CustomerController.create);
CustomerRouter.delete("/customer/delete/:id", CustomerController.remove);

export default CustomerRouter;
