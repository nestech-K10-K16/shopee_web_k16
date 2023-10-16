import { Router } from "express";
import ProductController from "../../controllers/product.controller";

const ProductRouter = Router();
ProductRouter.get("/product", ProductController.getList);
ProductRouter.get("/product/id/:id", ProductController.getById)
ProductRouter.post("/product/create", ProductController.create);
ProductRouter.put("/product/update", ProductController.edit);
ProductRouter.delete("/product/delete/:id", ProductController.remove);

export default ProductRouter;
