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
const billDetail_model_1 = __importDefault(require("../models/billDetail.model"));
const getByIdBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield billDetail_model_1.default.getByIdBill(req.params.id);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield billDetail_model_1.default.create(req.body);
        res.end();
    }
    catch (error) {
        console.log(error);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield billDetail_model_1.default.remove(req.params.id);
        res.end();
    }
    catch (error) {
        console.log(error);
    }
});
const BillDetailController = { getByIdBill, create, remove };
exports.default = BillDetailController;
