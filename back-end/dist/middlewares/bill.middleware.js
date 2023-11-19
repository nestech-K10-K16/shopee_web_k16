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
const user_model_1 = __importDefault(require("../models/user.model"));
const jwtAction_middleware_1 = __importDefault(require("./jwtAction.middleware"));
const checkCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
    const getByIdUser = yield user_model_1.default.getById(vefityToken.data.Email);
    if (getByIdUser[0].IdCustomer) {
        next();
        return;
    }
    const { Name, Country, Address, PostCode, City, Phone, Email } = req.body.customer;
    if (!Name || !Country || !Address || !PostCode || !City || !Phone || !Email) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return;
    }
    else {
        const IdCustomer = (0, uuid_1.v4)();
        yield customer_model_1.default.create(Object.assign(Object.assign({}, req.body.customer), { IdCustomer: IdCustomer }));
        yield user_model_1.default.editIdCustomer({ Email: vefityToken.data.Email, IdCustomer: IdCustomer });
        next();
    }
});
const BillMiddleware = { checkCreate };
exports.default = BillMiddleware;
