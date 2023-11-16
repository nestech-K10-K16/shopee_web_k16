import Connection from "../config/database";
import { typeBill } from "../types/common";

const getList = async () => {
    const [result] = await Connection.execute("SELECT * FROM BILL");
    return result;
}

const getById = async (id: string) => {
    const [result] = await Connection.execute("SELECT * FROM BILL WHERE IdBill = ?", [id]);
    return result;
}

const getByIdUser = async (id: string) => {
    console.log(id)
    const [result] = await Connection.execute("SELECT * FROM BILL WHERE IdCustomer = ?", [id]);
    return result;
}

const getListStatus = () => {
    const status = [
        { IdStatus: 0, Name: "Waiting" },
        { IdStatus: 1, Name: "Cancelled" },
        { IdStatus: 2, Name: "Accomplished" }
    ]
    return status
}

const getListDeliveryOptions = () => {
    const deliveryOptions = [
        { IdDeliveryOptions: 0, Name: "Standard delivery" },
        { IdDeliveryOptions: 1, Name: "Fast delivery" },
        { IdDeliveryOptions: 2, Name: "Slow delivery" },
    ]
    return deliveryOptions
}

const getListPaymentMethods = () => {
    const paymentMethods = [
        { IdPaymentMethods: 0, Name: "Direct bank transfer" },
        { IdPaymentMethods: 1, Name: "Check payments" },
        { IdPaymentMethods: 2, Name: "Cash on delivery" },
        { IdPaymentMethods: 3, Name: "PayPal" },
    ]
    return paymentMethods
}

const create = async (data: typeBill) => {
    const { IdBill, IdCustomer, OrderDate, Status, TotalMoney, PaymentMethods, DeliveryOptions } = data
    const [result] = await Connection.execute("INSERT INTO BILL VALUES (?,?,?,?,?,?,?)",
        [IdBill, IdCustomer, OrderDate, Status, TotalMoney, PaymentMethods, DeliveryOptions])
    return result
}

const remove = async (id: string) => {
    const [result] = await Connection.execute("DELETE FROM BILL WHERE IdBill =?", [id])
    return result
}

const BillModel = {
    getList, getById, getByIdUser,
    getListStatus, getListDeliveryOptions, getListPaymentMethods,
    create, remove
}
export default BillModel
