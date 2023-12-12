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
const user_model_1 = __importDefault(require("../models/user.model"));
const common_1 = require("../utils/common");
const jwtAction_middleware_1 = __importDefault(require("../middlewares/jwtAction.middleware"));
const getList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.getList();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const getListLimit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, page } = req.query;
        const userList = yield user_model_1.default.getList();
        const userLimitList = yield user_model_1.default.getListLimit({
            limit: limit * 1,
            offset: page * limit
        });
        const data = {
            totalPage: Math.ceil(userList.length / limit),
            result: userLimitList
        };
        res.send({ data: data });
    }
    catch (error) {
        console.log(error);
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.getById(req.params.id);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
});
const getListRole = (req, res) => {
    try {
        const result = user_model_1.default.getListRole();
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
};
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.create(Object.assign(Object.assign({}, req.body), { Password: (0, common_1.hashPassword)(req.body.Password) }));
        res.send({ errCode: 0, message: "User added successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.edit(req.body);
        res.send({ errCode: 0, message: "User updated successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.remove(req.params.id);
        res.send({ errCode: 0, message: "User deleted successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const handleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getById = yield user_model_1.default.getById(req.body.Email);
        const { Email, Name, Role } = getById[0];
        const payload = {
            data: { Email: Email, Name: Name, Role: Role },
            expiresIn: process.env.JWT_EXPIRES_IN
        };
        const createJwt = jwtAction_middleware_1.default.createJWT(payload);
        const token = jwtAction_middleware_1.default.verifyToken(createJwt);
        res.cookie("user", createJwt, { httpOnly: true, maxAge: 60 * 60 * 1000 });
        res.send({ errCode: 0, message: "Login successfully", token: token });
    }
    catch (error) {
        console.log(error);
    }
});
const refreshLogin = (req, res) => {
    try {
        const token = jwtAction_middleware_1.default.verifyToken(req.cookies.user);
        res.send({ token: token });
    }
    catch (error) {
        console.log(error);
    }
};
const hanldeLogout = (req, res) => {
    res.clearCookie(process.env.USER_COOKIE);
    res.end();
};
const hanldeRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Password } = req.body;
        yield user_model_1.default.create(Object.assign(Object.assign({}, req.body), { Role: 1, Password: (0, common_1.hashPassword)(Password) }));
        res.send({ errCode: 0, message: "Resigtser successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const UserController = {
    getList, getListLimit, getListRole, getById,
    create, edit, remove,
    handleLogin, refreshLogin, hanldeLogout, hanldeRegister
};
exports.default = UserController;
