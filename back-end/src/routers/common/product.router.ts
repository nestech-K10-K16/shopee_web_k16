import { Router } from "express";
import ProductController from "../../controllers/product.controller";
import productMiddleware from "../../middlewares/product.middleware";

const ProductRouter = Router();
ProductRouter.get("/product", ProductController.getList);
ProductRouter.get("/product/list-limit", ProductController.getListLimit);
ProductRouter.get("/product/id/:id", ProductController.getById);
ProductRouter.post("/product/create", productMiddleware.checkCreate, ProductController.create);
ProductRouter.put("/product/update", productMiddleware.checkEdit, ProductController.edit);
ProductRouter.delete("/product/delete/:id", ProductController.remove);

export default ProductRouter;
