import Connection from "../config/database";

const productModel = {
  getList: async () => {
    const [result] = await Connection.query("SELECT * FROM product").catch(err => { throw err })
    return result;
  },

  getById: async (data: string) => {
    const [result] = await Connection
      .query("SELECT * FROM product where IdProduct = ?", data).catch(err => { throw err })
    return result;
  },

  addNewProduct: async (data: object) => {
    const [result] = await Connection
      .query("INSERT INTO product VALUES (?,?,?,?,?)", data).catch(err => { throw err })
    return result
  },

  updateProduct: async (data: object) => {
    const [result] = await Connection
      .query(
        "UPDATE product SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?",
        data
      ).catch(err => { throw err })
    return result
  },

  deleteProduct: async (data: string) => {
    const [result] = await Connection
      .query("DELETE FROM product WHERE IdProduct =?", data).catch(err => { throw err })
    return result
  },
};

export default productModel