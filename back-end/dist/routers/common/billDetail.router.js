"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const billDetail_controller_1 = __importDefault(require("../../controllers/billDetail.controller"));
const BillDetailRouter = (0, express_1.Router)();
BillDetailRouter.get("/bill-detail/id-bill/:id", billDetail_controller_1.default.getByIdBill);
BillDetailRouter.post("/bill-detail/create", billDetail_controller_1.default.create);
BillDetailRouter.delete("/bill-detail/delete/:id", billDetail_controller_1.default.remove);
exports.default = BillDetailRouter;
