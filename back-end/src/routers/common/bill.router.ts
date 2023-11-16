import { Router } from "express";
import BillController from "../../controllers/bill.controller";
import BillMiddleware from "../../middlewares/bill.middleware";
import JwtAcion from "../../middlewares/jwtAction.middleware";

const BillRouter = Router();
BillRouter.get("/bill", BillController.getList);
BillRouter.get("/bill/id/:id", BillController.getById);
BillRouter.get("/bill/id-user/:id", BillController.getByIdUser);
BillRouter.get("/bill/status", BillController.getListStatus);
BillRouter.get("/bill/payment-methods", BillController.getListPaymentMethods);
BillRouter.get("/bill/delivery-options", BillController.getListDeliveryOptions);
BillRouter.post("/bill/create", JwtAcion.checkTokenUser, BillMiddleware.checkCreate, BillController.create);
BillRouter.delete("/bill/delete/:id", BillController.remove);

export default BillRouter;
