import Connection from "../config/database";

const getList = async () => {
  const [result] = await Connection.query("SELECT * FROM PRODUCT");
  return result;
}

const getById = async (data: string) => {
  const [result] = await Connection.query("SELECT * FROM PRODUCT where IdProduct = ?", data);
  return result;
}

const create = async (data: object) => {
  const [result] = await Connection.query("INSERT INTO PRODUCT VALUES (?,?,?,?,?)", data);
  return result
}

const edit = async (data: object) => {
  const [result] = await Connection
    .query("UPDATE PRODUCT SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?", data);
  return result
}

const remove = async (data: string) => {
  const [result] = await Connection.query("DELETE FROM PRODUCT WHERE IdProduct =?", data)
  return result
}

const ProductModel = { getList, getById, create, edit, remove }
export default ProductModel