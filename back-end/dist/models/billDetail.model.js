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
const getByIdBill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM BILL_DETAIL WHERE IdBill = ?", [id]);
    return result;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.query("INSERT INTO BILL_DETAIL VALUES ?", [data]);
    return result;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("DELETE FROM BILL_DETAIL WHERE IdBill = ?", [id]);
    return result;
});
const BillDetailModel = { getByIdBill, create, remove };
exports.default = BillDetailModel;
