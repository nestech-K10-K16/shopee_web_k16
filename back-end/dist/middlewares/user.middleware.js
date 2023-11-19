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
const common_1 = require("../utils/common");
const user_model_1 = __importDefault(require("../models/user.model"));
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.getById(id);
    return result[0];
});
const checkCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password, Name, Role } = req.body;
    if (!Email || !Password || !Name || !Role) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return;
    }
    const id = yield getById(Email);
    if (id) {
        res.send({ errCode: 1, message: "Email already exists" });
        return;
    }
    next();
});
const checkEdit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password, Name, Role } = req.body;
    const id = yield getById(Email);
    if (!id) {
        res.send({ errCode: 1, message: "Id does not exist in the system" });
        return;
    }
    if (!Password || !Name || !Role) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return;
    }
    next();
});
const checkLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
        res.send({ errCode: 1, message: "Email and password cannot be empty" });
        return;
    }
    const user = yield getById(Email);
    if (!user) {
        res.send({ errCode: 1, message: "Email or password is incorrect" });
        return;
    }
    const checkPassword = (0, common_1.checkHashPassword)(Password, user.Password);
    if (checkPassword === false) {
        res.send({ errCode: 1, message: "Email or password is incorrect" });
        return;
    }
    next();
});
const checkRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password, Name, RePassword } = req.body;
    if (!Email || !Password || !Name || !RePassword) {
        res.send({ errCode: 1, message: "Input with (*) cannot be empty" });
        return;
    }
    const id = yield getById(Email);
    if (id) {
        res.send({ errCode: 1, message: "Email is already in use" });
        return;
    }
    if (RePassword !== Password) {
        res.send({ errCode: 1, message: "Confirm password does not match" });
        return;
    }
    next();
});
const userMiddleware = { checkCreate, checkEdit, checkLogin, checkRegister };
exports.default = userMiddleware;
