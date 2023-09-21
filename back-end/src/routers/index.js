const productController = require("../controllers/product.controller");
const express = require("express");
const router = express.Router();

router.get("/product", productController.product);
router.post("/product/add", productController.addNewProduct);
router.put("/product/update/:id", productController.updateProduct);
router.get("/product/delete/:id", productController.deleteProduct);

module.exports = router;
