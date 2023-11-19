"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../../controllers/cart.controller"));
const cart_middleware_1 = __importDefault(require("../../middlewares/cart.middleware"));
const jwtAction_middleware_1 = __importDefault(require("../../middlewares/jwtAction.middleware"));
const CartRouter = (0, express_1.Router)();
CartRouter.get("/cart/id-user", jwtAction_middleware_1.default.checkTokenUser, cart_controller_1.default.getByIdUser);
CartRouter.post("/cart/create", jwtAction_middleware_1.default.checkTokenUser, cart_middleware_1.default.checkCreate, cart_controller_1.default.create);
CartRouter.put("/cart/update-amount", jwtAction_middleware_1.default.checkTokenUser, cart_controller_1.default.editAmount);
CartRouter.delete("/cart/delete/:id", jwtAction_middleware_1.default.checkTokenUser, cart_controller_1.default.remove);
CartRouter.delete("/cart/delete-id-user", jwtAction_middleware_1.default.checkTokenUser, cart_controller_1.default.removeByIdUser);
exports.default = CartRouter;
