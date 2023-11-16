import Connection from "../config/database";

const getByIdBill = async (id: string) => {
    const [result] = await Connection.execute("SELECT * FROM BILL_DETAIL WHERE IdBill = ?", [id]);
    return result;
}

const create = async (data: []) => {
    const [result] = await Connection.query("INSERT INTO BILL_DETAIL VALUES ?", [data])
    return result
}

const remove = async (id: string) => {
    const [result] = await Connection.execute("DELETE FROM BILL_DETAIL WHERE IdBill = ?", [id])
    return result
}

const BillDetailModel = { getByIdBill, create, remove }
export default BillDetailModel
