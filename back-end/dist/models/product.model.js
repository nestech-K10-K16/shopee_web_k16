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
    const [result] = yield database_1.default.execute("SELECT * FROM PRODUCT ");
    return result;
});
const getListLimit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, offset } = data;
    const [result] = yield database_1.default.query("SELECT * FROM PRODUCT LIMIT ? OFFSET ?", [limit, offset]);
    return result;
});
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("SELECT * FROM PRODUCT where IdProduct = ?", [id]);
    return result;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { IdProduct, Name, Amount, Price, Image } = data;
    const [result] = yield database_1.default.execute("INSERT INTO PRODUCT VALUES (?,?,?,?,?)", [IdProduct, Name, Amount, Price, Image]);
    return result;
});
const edit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { IdProduct, Name, Amount, Price, Image } = data;
    const [result] = yield database_1.default.execute("UPDATE PRODUCT SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?", [Name, Amount, Price, Image, IdProduct]);
    return result;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield database_1.default.execute("DELETE FROM PRODUCT WHERE IdProduct =?", [id]);
    return result;
});
const ProductModel = { getList, getListLimit, getById, create, edit, remove };
exports.default = ProductModel;
