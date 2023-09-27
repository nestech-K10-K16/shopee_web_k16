const db = require("../config/database");

module.exports = {
  getList: async () => {
    const [result] = await db.query("SELECT * FROM product");
    return result;
  },

  getById: async (data) => {
    const [result] = await db.query(
      "SELECT IdProduct FROM product WHERE IdProduct = ?",
      data
    );
    return result;
  },

  addNewProduct: async (data) => {
    await db.query("INSERT INTO product VALUES (?,?,?,?,?)", data);
  },

  updateProduct: async (data) => {
    await db.query(
      "UPDATE product SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?",
      data
    );
  },

  deleteProduct: async (data) => {
    await db.query("DELETE FROM product WHERE IdProduct =?", data);
  },
};
