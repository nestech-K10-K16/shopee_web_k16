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
const getById = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, IdProduct } = data;
    const [result] = yield database_1.default.execute("SELECT * FROM CART WHERE Email = ? AND IdProduct = ?", [Email, IdProduct]);
    return result;
});
const getByIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM CART WHERE Email = ?", [id]);
    return result;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, IdProduct, Amount, IntoMoney } = data;
    const [result] = yield database_1.default.execute("INSERT INTO CART VALUES (?,?,?,?)", [Email, IdProduct, Amount, IntoMoney]);
    return result;
});
const editAmount = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, IdProduct, Amount, IntoMoney } = data;
    const [result] = yield database_1.default.execute("UPDATE CART SET Amount = ?, IntoMoney = ? WHERE Email = ? AND IdProduct = ?", [Amount, IntoMoney, Email, IdProduct]);
    return result;
});
const remove = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, IdProduct } = data;
    const [result] = yield database_1.default.execute("DELETE FROM CART WHERE Email = ? AND IdProduct =?", [Email, IdProduct]);
    return result;
});
const removeByIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("DELETE FROM CART WHERE Email = ?", [id]);
    return result;
});
const CartModel = { getByIdUser, getById, create, editAmount, remove, removeByIdUser };
exports.default = CartModel;
