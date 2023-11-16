import Connection from "../config/database";
import { typeCart } from "../types/common";

const getById = async (data: { Email: string, IdProduct: string }) => {
    const { Email, IdProduct } = data
    const [result] = await Connection.execute("SELECT * FROM CART WHERE Email = ? AND IdProduct = ?", [Email, IdProduct]);
    return result;
}

const getByIdUser = async (id: string) => {
    const [result] = await Connection.execute("SELECT * FROM CART WHERE Email = ?", [id]);
    return result;
}

const create = async (data: typeCart) => {
    const { Email, IdProduct, Amount, IntoMoney } = data
    const [result] = await Connection.execute("INSERT INTO CART VALUES (?,?,?,?)",
        [Email, IdProduct, Amount, IntoMoney])
    return result
}

const editAmount = async (data: typeCart) => {
    const { Email, IdProduct, Amount, IntoMoney } = data
    const [result] = await Connection.execute("UPDATE CART SET Amount = ?, IntoMoney = ? WHERE Email = ? AND IdProduct = ?",
        [Amount, IntoMoney, Email, IdProduct])
    return result
}

const remove = async (data: { Email: string, IdProduct: string }) => {
    const { Email, IdProduct } = data
    const [result] = await Connection.execute("DELETE FROM CART WHERE Email = ? AND IdProduct =?",
        [Email, IdProduct])
    return result
}

const removeByIdUser = async (id: string) => {
    const [result] = await Connection.execute("DELETE FROM CART WHERE Email = ?", [id])
    return result
}

const CartModel = { getByIdUser, getById, create, editAmount, remove, removeByIdUser }
export default CartModel
