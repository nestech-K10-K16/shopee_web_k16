
import productController from "../controllers/product.controller";
import { Router } from "express";
const router = Router();

router.get("/product", productController.product);
router.get("/product/id/:id", productController.getById)
router.post("/product/add", productController.addNewProduct);
router.put("/product/update", productController.updateProduct);
router.delete("/product/delete/:id", productController.deleteProduct);

export default router
