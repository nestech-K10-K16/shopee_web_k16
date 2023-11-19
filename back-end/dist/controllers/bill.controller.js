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
const bill_model_1 = __importDefault(require("../models/bill.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const jwtAction_middleware_1 = __importDefault(require("../middlewares/jwtAction.middleware"));
const getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_model_1.default.getList();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_model_1.default.getById(req.params.id);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const getByIdUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_model_1.default.getByIdUser(req.params.id);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const getListStatus = (req, res) => {
    try {
        const result = bill_model_1.default.getListStatus();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
};
const getListDeliveryOptions = (req, res) => {
    try {
        const result = bill_model_1.default.getListDeliveryOptions();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
};
const getListPaymentMethods = (req, res) => {
    try {
        const result = bill_model_1.default.getListPaymentMethods();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
};
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
        const getByIdUser = yield user_model_1.default.getById(vefityToken.data.Email);
        const IdBill = (0, uuid_1.v4)();
        yield bill_model_1.default.create(Object.assign(Object.assign({}, req.body.bill), { IdBill: IdBill, IdCustomer: getByIdUser[0].IdCustomer, OrderDate: new Date(), Status: 0, DeliveryOptions: 0 }));
        res.send({ errCode: 0, message: "Bill added successfully", IdBill: IdBill });
    }
    catch (error) {
        console.log(error);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield bill_model_1.default.remove(req.params.id);
        res.send({ errCode: 0, message: "Bill deleted successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const BillController = {
    getList, getById, getByIdUser,
    getListStatus, getListDeliveryOptions, getListPaymentMethods,
    create, remove
};
exports.default = BillController;
