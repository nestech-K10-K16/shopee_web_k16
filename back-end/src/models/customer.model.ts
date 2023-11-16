import Connection from "../config/database";
import { typeCustomer } from "../types/common";

const getList = async () => {
    const [result] = await Connection.execute("SELECT * FROM CUSTOMER");
    return result;
}

const getById = async (id: string) => {
    const [result] = await Connection.execute("SELECT * FROM CUSTOMER where IdCustomer = ?", [id]);
    return result;
}

const create = async (data: typeCustomer) => {
    const { IdCustomer, Name, CompanyName, Country, Address, PostCode, City, Phone, Email } = data;
    const [result] = await Connection.execute("INSERT INTO CUSTOMER VALUES (?,?,?,?,?,?,?,?,?)",
        [IdCustomer, Name, CompanyName, Country, Address, PostCode, City, Phone, Email]);
    return result
}

const remove = async (id: string) => {
    const [result] = await Connection.execute("DELETE FROM CUSTOMER WHERE IdCustomer =?", [id])
    return result
}

const CustomerModel = { getList, getById, create, remove }
export default CustomerModel