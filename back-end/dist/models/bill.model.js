"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const getList = () => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM BILL");
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM BILL WHERE IdBill = ?", [id]);
    return result;
});
const getByIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM BILL WHERE IdCustomer = ?", [id]);
    return result;
});
const getListStatus = () => {
    const status = [
        { IdStatus: 0, Name: "Waiting" },
        { IdStatus: 1, Name: "Cancelled" },
        { IdStatus: 2, Name: "Accomplished" }
    ];
    return status;
};
const getListDeliveryOptions = () => {
    const deliveryOptions = [
        { IdDeliveryOptions: 0, Name: "Standard delivery" },
        { IdDeliveryOptions: 1, Name: "Fast delivery" },
        { IdDeliveryOptions: 2, Name: "Slow delivery" },
    ];
    return deliveryOptions;
};
const getListPaymentMethods = () => {
    const paymentMethods = [
        { IdPaymentMethods: 0, Name: "Direct bank transfer" },
        { IdPaymentMethods: 1, Name: "Check payments" },
        { IdPaymentMethods: 2, Name: "Cash on delivery" },
        { IdPaymentMethods: 3, Name: "PayPal" },
    ];
    return paymentMethods;
};
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { IdBill, IdCustomer, OrderDate, Status, TotalMoney, PaymentMethods, DeliveryOptions } = data;
    const [result] = yield database_1.default.execute("INSERT INTO BILL VALUES (?,?,?,?,?,?,?)", [IdBill, IdCustomer, OrderDate, Status, TotalMoney, PaymentMethods, DeliveryOptions]);
    return result;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("DELETE FROM BILL WHERE IdBill =?", [id]);
    return result;
});
const BillModel = {
    getList, getById, getByIdUser,
    getListStatus, getListDeliveryOptions, getListPaymentMethods,
    create, remove
};
exports.default = BillModel;
