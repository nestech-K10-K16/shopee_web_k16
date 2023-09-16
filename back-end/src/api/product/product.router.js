const productController = require("./product.controller");

module.exports = (router) => {
  router.get("/product", productController.getList);
  router.get("/product/id/:id", productController.getById);
  router.post("/product/add", productController.addNewProduct);
  router.put("/product/update/:id", productController.updateProduct);
  router.get("/product/delete/:id", productController.removeProduct);
};
