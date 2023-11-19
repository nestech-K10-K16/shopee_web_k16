"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bill_controller_1 = __importDefault(require("../../controllers/bill.controller"));
const bill_middleware_1 = __importDefault(require("../../middlewares/bill.middleware"));
const jwtAction_middleware_1 = __importDefault(require("../../middlewares/jwtAction.middleware"));
const BillRouter = (0, express_1.Router)();
BillRouter.get("/bill", bill_controller_1.default.getList);
BillRouter.get("/bill/id/:id", bill_controller_1.default.getById);
BillRouter.get("/bill/id-user/:id", bill_controller_1.default.getByIdUser);
BillRouter.get("/bill/status", bill_controller_1.default.getListStatus);
BillRouter.get("/bill/payment-methods", bill_controller_1.default.getListPaymentMethods);
BillRouter.get("/bill/delivery-options", bill_controller_1.default.getListDeliveryOptions);
BillRouter.post("/bill/create", jwtAction_middleware_1.default.checkTokenUser, bill_middleware_1.default.checkCreate, bill_controller_1.default.create);
BillRouter.delete("/bill/delete/:id", bill_controller_1.default.remove);
exports.default = BillRouter;
