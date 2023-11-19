"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../../controllers/product.controller"));
const product_middleware_1 = __importDefault(require("../../middlewares/product.middleware"));
const ProductRouter = (0, express_1.Router)();
ProductRouter.get("/product", product_controller_1.default.getList);
ProductRouter.get("/product/list-limit", product_controller_1.default.getListLimit);
ProductRouter.get("/product/id/:id", product_controller_1.default.getById);
ProductRouter.post("/product/create", product_middleware_1.default.checkCreate, product_controller_1.default.create);
ProductRouter.put("/product/update", product_middleware_1.default.checkEdit, product_controller_1.default.edit);
ProductRouter.delete("/product/delete/:id", product_controller_1.default.remove);
exports.default = ProductRouter;
