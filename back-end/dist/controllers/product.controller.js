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
const getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.default.getList();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const getListLimit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, page } = req.query;
        const data = yield product_model_1.default.getList();
        const dataLimit = yield product_model_1.default.getListLimit({
            limit: limit * 1,
            offset: page * limit
        });
        const result = {
            totalPage: Math.ceil(data.length / limit),
            result: dataLimit
        };
        res.send({ data: result });
    }
    catch (error) {
        console.log(error);
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_model_1.default.getById(req.params.id);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_model_1.default.create(req.body);
        res.send({ errCode: 0, message: "Product added successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_model_1.default.edit(req.body);
        res.send({ errCode: 0, message: "Product updated successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_model_1.default.remove(req.params.id);
        res.send({ errCode: 0, message: "Product deleted successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const ProductController = { getList, getListLimit, getById, create, edit, remove };
exports.default = ProductController;
