const productModel = require("./product.model");

module.exports = {
  getList: async (req, res) => {
    productModel.getList((data) => {
      res.send(data);
    });
  },

  getById: async (req, res) => {
    productModel.getById(req.params.id, (data) => {
      res.send(data);
    });
  },

  addNewProduct: async (req, res) => {
    const { IdProduct, Name, Amount, Price, Image } = req.body;

    if (!IdProduct) {
      res.send({ message: "please enter id" });
      return;
    }

    productModel.addNewProduct(
      [IdProduct, Name, Amount, Price, Image],
      res.send({ message: "add success" })
    );
  },

  updateProduct: async (req, res) => {
    const { Name, Amount, Price, Image } = req.body;

    productModel.updateProduct(
      [Name, Amount, Price, Image, req.params.id],
      res.send({ message: "update success" })
    );
  },

  removeProduct: async (req, res) => {
    productModel.deleteProduct(
      req.params.id,
      res.send({ message: "delete success" })
    );
  },
};
