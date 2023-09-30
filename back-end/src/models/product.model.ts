import Connection from "../config/database";

const productModel = {
  getList: async () => {
    const [result] = await Connection.query("SELECT * FROM product")
    return result;
  },

  getById: async (data: string) => {
    const [result] = await Connection
      .query("SELECT * FROM product where IdProduct = ?", data)
    return result;
  },

  addNewProduct: async (data: object) => {
    const [result] = await Connection
      .query("INSERT INTO product VALUES (?,?,?,?,?)", data)
    return result
  },

  updateProduct: async (data: object) => {
    const [result] = await Connection
      .query(
        "UPDATE product SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?",
        data
      )
    return result
  },

  deleteProduct: async (data: string) => {
    const [result] = await Connection
      .query("DELETE FROM product WHERE IdProduct =?", data)
    return result
  },
};

export default productModel