import Connection from "../config/database";
import { typeUser } from "../types/common";

const getList = async () => {
    const [result] = await Connection.execute("SELECT * FROM USER")
    return result;
}

const getListRole = () => {
    const role = [
        { IdRole: 0, Name: "Admin" },
        { IdRole: 1, Name: "Customer" }
    ]
    return role
}

const getById = async (id: string) => {
    const [result] = await Connection.execute("SELECT * FROM USER WHERE Email = ?", [id])
    return result;
}

const create = async (data: typeUser) => {
    const { Email, Password, Name, Role } = data
    const [result] = await Connection.execute("INSERT INTO USER VALUES (?,?,?,?,?)",
        [Email, Password, Name, Role, null])
    return result;
}

const edit = async (data: typeUser) => {
    const { Email, Password, Name, Role } = data
    const [result] = await Connection.execute("UPDATE USER SET Password =?, Name =?, IdRole =? WHERE Email =?,",
        [Password, Name, Role, Email]);
    return result
}

const editIdCustomer = async (data: { Email: string, IdCustomer: string }) => {
    const { Email, IdCustomer } = data
    const [result] = await Connection.execute("UPDATE USER SET IdCustomer = ? WHERE Email = ?",
        [IdCustomer, Email]);
    return result
}

const remove = async (id: string) => {
    const [result] = await Connection.execute("DELETE FROM USER WHERE Email =?", [id])
    return result
}

const UserModel = { getList, getListRole, getById, create, edit, editIdCustomer, remove }
export default UserModel
