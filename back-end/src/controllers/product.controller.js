const productModel = require("../models/product.model");

const viewProduct = (res) => {
  res.redirect("/product");
};

module.exports = {
  product: async (req, res) => {
    const result = await productModel.getList();
    return res.render("product", { listProduct: result });
  },

  addNewProduct: async (req, res) => {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    if (!IdProduct) {
      res.send({ message: "id cannot be empty" });
      return;
    }

    await productModel.addNewProduct([
      IdProduct,
      Name,
      Amount || 0,
      Price || 0,
      Image,
    ]);

    viewProduct(res);
  },

  updateProduct: async (req, res) => {
    const { Name, Amount, Price, Image } = req.body;
    await productModel.updateProduct([
      Name,
      Amount,
      Price,
      Image,
      req.params.id,
    ]);

    viewProduct(res);
  },

  deleteProduct: async (req, res) => {
    await productModel.deleteProduct(req.params.id);
    viewProduct(res);
  },
};
