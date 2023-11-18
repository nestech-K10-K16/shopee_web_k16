import Connection from "../config/database";
import { typeProduct } from "../types/common";

const getList = async () => {
  const [result] = await Connection.execute("SELECT * FROM PRODUCT ");
  return result;
}

const getListLimit = async (data: { limit: number, offset: number }) => {
  const { limit, offset } = data
  const [result] = await Connection.query("SELECT * FROM PRODUCT LIMIT ? OFFSET ?", [limit, offset]);
  return result;
}

const getById = async (id: string) => {
  const [result] = await Connection.execute("SELECT * FROM PRODUCT where IdProduct = ?", [id]);
  return result;
}

const create = async (data: typeProduct) => {
  const { IdProduct, Name, Amount, Price, Image } = data
  const [result] = await Connection.execute("INSERT INTO PRODUCT VALUES (?,?,?,?,?)",
    [IdProduct, Name, Amount, Price, Image]);
  return result
}

const edit = async (data: typeProduct) => {
  const { IdProduct, Name, Amount, Price, Image } = data
  const [result] = await Connection.execute("UPDATE PRODUCT SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?",
    [Name, Amount, Price, Image, IdProduct]);
  return result
}

const remove = async (id: string) => {
  const [result] = await Connection.execute("DELETE FROM PRODUCT WHERE IdProduct =?", [id])
  return result
}

const ProductModel = { getList, getListLimit, getById, create, edit, remove }
export default ProductModel