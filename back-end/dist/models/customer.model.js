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
    const [result] = yield database_1.default.execute("SELECT * FROM CUSTOMER");
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM CUSTOMER where IdCustomer = ?", [id]);
    return result;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { IdCustomer, Name, CompanyName, Country, Address, PostCode, City, Phone, Email } = data;
    const [result] = yield database_1.default.execute("INSERT INTO CUSTOMER VALUES (?,?,?,?,?,?,?,?,?)", [IdCustomer, Name, CompanyName, Country, Address, PostCode, City, Phone, Email]);
    return result;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("DELETE FROM CUSTOMER WHERE IdCustomer =?", [id]);
    return result;
});
const CustomerModel = { getList, getById, create, remove };
exports.default = CustomerModel;
