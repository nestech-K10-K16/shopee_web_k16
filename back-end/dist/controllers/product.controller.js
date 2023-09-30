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
const productController = {
    product: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield product_model_1.default.getList().catch(err => console.log(err));
        ;
        res.send(result);
    }),
    getById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield product_model_1.default.getById(req.params.id).catch(err => console.log(err));
        ;
        res.send(result);
    }),
    addNewProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, name, amount, price, image } = req.body;
        const result = yield product_model_1.default.addNewProduct([
            id,
            name,
            amount || 0,
            price || 0,
            image,
        ]).catch(err => console.log(err));
        res.send(result);
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, name, amount, price, image } = req.body;
        const result = yield product_model_1.default.updateProduct([
            name,
            amount,
            price,
            image,
            id
        ]).catch(err => console.log(err));
        ;
        res.send(result);
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield product_model_1.default.deleteProduct(req.params.id).catch(err => console.log(err));
        res.send(result);
    }),
};
exports.default = productController;
