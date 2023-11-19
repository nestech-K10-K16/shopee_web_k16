"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./common/user.router"));
const product_router_1 = __importDefault(require("./common/product.router"));
const customer_router_1 = __importDefault(require("./common/customer.router"));
const bill_router_1 = __importDefault(require("./common/bill.router"));
const billDetail_router_1 = __importDefault(require("./common/billDetail.router"));
const cart_router_1 = __importDefault(require("./common/cart.router"));
const router = [user_router_1.default, product_router_1.default, cart_router_1.default, customer_router_1.default, bill_router_1.default, billDetail_router_1.default];
const Router = (app) => {
    app.use("/", router.map(item => item));
};
exports.default = Router;
