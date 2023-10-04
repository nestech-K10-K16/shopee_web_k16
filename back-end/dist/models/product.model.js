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
const productModel = {
    getList: () => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield database_1.default.query("SELECT * FROM product").catch(err => { throw err; });
        return result;
    }),
    getById: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield database_1.default
            .query("SELECT * FROM product where IdProduct = ?", data).catch(err => { throw err; });
        return result;
    }),
    addNewProduct: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield database_1.default
            .query("INSERT INTO product VALUES (?,?,?,?,?)", data).catch(err => { throw err; });
        return result;
    }),
    updateProduct: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield database_1.default
            .query("UPDATE product SET Name =?, Amount =?, Price =?, Image =? WHERE IdProduct =?", data).catch(err => { throw err; });
        return result;
    }),
    deleteProduct: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const [result] = yield database_1.default
            .query("DELETE FROM product WHERE IdProduct =?", data).catch(err => { throw err; });
        return result;
    }),
};
exports.default = productModel;
