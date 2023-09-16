const db = require("../../common/connect");

module.exports = {
  getList: (result) => {
    db.query("SELECT * FROM product", (err, data) => {
      if (err) result(err);
      result(data);
    });
  },

  getById: (data, result) => {
    db.query("SELECT * FROM product WHERE IdProduct = ?", data, (err, data) => {
      if (err) result(err);
      result(data);
    });
  },

  addNewProduct: (data, result) => {
    db.query("INSERT INTO product VALUES (?,?,?,?,?)", data, (err) => {
      if (err) result(err);
    });
  },

  updateProduct: (data, result) => {
    db.query(
      "UPDATE product SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?",
      data,
      (err) => {
        if (err) result(err);
      }
    );
  },

  deleteProduct: (data, result) => {
    db.query("DELETE FROM product WHERE IdProduct =?", data, (err) => {
      if (err) result(err);
    });
  },
};
