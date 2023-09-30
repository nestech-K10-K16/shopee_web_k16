"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/product", product_controller_1.default.product);
router.get("/product/id/:id", product_controller_1.default.getById);
router.post("/product/add", product_controller_1.default.addNewProduct);
router.put("/product/update", product_controller_1.default.updateProduct);
router.delete("/product/delete/:id", product_controller_1.default.deleteProduct);
exports.default = router;
