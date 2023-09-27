const productModel = require("../models/product.model");

module.exports = {
  product: async (req, res) => {
    const result = await productModel.getList();
    res.send(result);
  },

  addNewProduct: async (req, res) => {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    if (!IdProduct) {
      res.send("id your is empty");
      return;
    }

    if (!productModel.getById(IdProduct)) {
      res.send("already have this id");
      return;
    }

    await productModel.addNewProduct([
      IdProduct,
      Name,
      Amount || 0,
      Price || 0,
      Image,
    ]);
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
  },

  deleteProduct: async (req, res) => {
    await productModel.deleteProduct(req.params.id);
  },
};
