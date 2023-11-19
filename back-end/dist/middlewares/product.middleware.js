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
const product_model_1 = __importDefault(require("../models/product.model"));
const checkCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { IdProduct, Name, Amount, Price, Image } = req.body;
    if (!IdProduct || !Name || !Amount || !Price || !Image) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return;
    }
    const idProduct = yield product_model_1.default.getById(IdProduct);
    if (idProduct[0]) {
        res.send({ errCode: 1, message: "Id already exists in the system" });
        return;
    }
    next();
});
const checkEdit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { IdProduct, Name, Amount, Price, Image } = req.body;
    const idProduct = yield product_model_1.default.getById(IdProduct);
    if (!idProduct[0]) {
        res.send({ errCode: 1, message: "Id does not exist in the system" });
        return;
    }
    if (!Name || !Amount || !Price || !Image) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return;
    }
    next();
});
const productMiddleware = { checkCreate, checkEdit };
exports.default = productMiddleware;
