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
const cart_model_1 = __importDefault(require("../models/cart.model"));
const jwtAction_middleware_1 = __importDefault(require("./jwtAction.middleware"));
const checkCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { IdProduct } = req.body;
    const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
    const getById = yield cart_model_1.default.getById({ Email: (_a = vefityToken.data) === null || _a === void 0 ? void 0 : _a.Email, IdProduct: IdProduct });
    if (getById[0]) {
        res.send({ errCode: 2, message: "This item is already in your Shopping bag" });
        return;
    }
    next();
});
const CartMiddleware = { checkCreate };
exports.default = CartMiddleware;
