import { Router } from "express";
import BillDetailController from "../../controllers/billDetail.controller";

const BillDetailRouter = Router();
BillDetailRouter.get("/bill-detail/id-bill/:id", BillDetailController.getByIdBill);
BillDetailRouter.post("/bill-detail/create", BillDetailController.create);
BillDetailRouter.delete("/bill-detail/delete/:id", BillDetailController.remove);

export default BillDetailRouter;
