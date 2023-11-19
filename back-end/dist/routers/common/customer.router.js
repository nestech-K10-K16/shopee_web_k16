"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_controller_1 = __importDefault(require("../../controllers/customer.controller"));
const customer_middleware_1 = __importDefault(require("../../middlewares/customer.middleware"));
const CustomerRouter = (0, express_1.Router)();
CustomerRouter.get("/customer", customer_controller_1.default.getList);
CustomerRouter.get("/customer/id/:id", customer_controller_1.default.getById);
CustomerRouter.post("/customer/create", customer_middleware_1.default.checkCreate, customer_controller_1.default.create);
CustomerRouter.delete("/customer/delete/:id", customer_controller_1.default.remove);
exports.default = CustomerRouter;
