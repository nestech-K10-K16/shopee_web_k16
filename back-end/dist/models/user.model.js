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
    const [result] = yield database_1.default.execute("SELECT * FROM USER");
    return result;
});
const getListLimit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, offset } = data;
    const [result] = yield database_1.default.query("SELECT * FROM USER LIMIT ? OFFSET ?", [limit, offset]);
    return result;
});
const getListRole = () => {
    const role = [
        { IdRole: 0, Name: "Admin" },
        { IdRole: 1, Name: "Customer" }
    ];
    return role;
};
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM USER WHERE Email = ?", [id]);
    return result;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password, Name, Role } = data;
    const [result] = yield database_1.default.execute("INSERT INTO USER VALUES (?,?,?,?,?)", [Email, Password, Name, Role, null]);
    return result;
});
const edit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password, Name, Role } = data;
    const [result] = yield database_1.default.execute("UPDATE USER SET Password =?, Name =?, IdRole =? WHERE Email =?,", [Password, Name, Role, Email]);
    return result;
});
const editIdCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, IdCustomer } = data;
    const [result] = yield database_1.default.execute("UPDATE USER SET IdCustomer = ? WHERE Email = ?", [IdCustomer, Email]);
    return result;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("DELETE FROM USER WHERE Email =?", [id]);
    return result;
});
const UserModel = { getList, getListLimit, getListRole, getById, create, edit, editIdCustomer, remove };
exports.default = UserModel;
