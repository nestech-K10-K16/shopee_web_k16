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
const jwtAction_middleware_1 = __importDefault(require("../middlewares/jwtAction.middleware"));
const getByIdUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
        const result = yield cart_model_1.default.getByIdUser((_a = vefityToken.data) === null || _a === void 0 ? void 0 : _a.Email);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
        yield cart_model_1.default.create(Object.assign(Object.assign({}, req.body), { Email: vefityToken.data.Email }));
        res.send({ errCode: 0, message: "The item added to your Shopping bag" });
    }
    catch (error) {
        console.log(error);
    }
});
const editAmount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
        yield cart_model_1.default.editAmount(Object.assign(Object.assign({}, req.body), { Email: (_b = vefityToken.data) === null || _b === void 0 ? void 0 : _b.Email }));
        res.end();
    }
    catch (error) {
        console.log(error);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
        yield cart_model_1.default.remove({ Email: (_c = vefityToken.data) === null || _c === void 0 ? void 0 : _c.Email, IdProduct: req.params.id });
        res.send({ errCode: 0, message: "The item has been cleared from your Shopping bag" });
    }
    catch (error) {
        console.log(error);
    }
});
const removeByIdUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const vefityToken = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
        yield cart_model_1.default.removeByIdUser((_d = vefityToken.data) === null || _d === void 0 ? void 0 : _d.Email);
        res.send({ errCode: 0, message: "All Items have been removed from your Shopping bag" });
    }
    catch (error) {
        console.log(error);
    }
});
const CartController = { getByIdUser, create, editAmount, remove, removeByIdUser };
exports.default = CartController;
