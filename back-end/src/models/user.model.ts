import Connection from "../config/database";

const getList = async () => {
    const [result] = await Connection.query("SELECT * FROM USER")
    return result;
}

const getById = async (email: string) => {
    const [result] = await Connection.query("SELECT * FROM USER WHERE Email = ?", email)
    return result;
}

const create = async (data: object) => {
    const [result] = await Connection.query("INSERT INTO USER VALUES (?,?,?,?)", data)
    return result;
}

const edit = async (data: object) => {
    const [result] = await Connection
        .query("UPDATE USER SET Password =?, Name =?, IdRole =? WHERE Email =?,", data);
    return result
}

const remove = async (data: object) => {
    const [result] = await Connection.query("DELETE FROM USER WHERE Email =?", data)
    return result
}

const UserModel = { getList, getById, create, edit, remove }
export default UserModel
