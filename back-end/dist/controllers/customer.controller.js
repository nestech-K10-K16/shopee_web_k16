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
const uuid_1 = require("uuid");
const customer_model_1 = __importDefault(require("../models/customer.model"));
const getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_model_1.default.getList();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_model_1.default.getById(req.params.id);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const IdCustomer = (0, uuid_1.v4)();
        yield customer_model_1.default.create(Object.assign(Object.assign({}, req.body), { IdCustomer: IdCustomer }));
        res.send({ errCode: 0, message: "Customer added successfully", IdCustomer: IdCustomer });
    }
    catch (error) {
        console.log(error);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield customer_model_1.default.remove(req.params.id);
        res.send({ errCode: 0, message: "Customer deleted successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const CustomerController = { getList, getById, create, remove };
exports.default = CustomerController;
