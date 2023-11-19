"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWT = (payload) => {
    const key = process.env.JWT_SECRET;
    const token = jsonwebtoken_1.default.sign(payload, key);
    return token;
};
const verifyToken = (token) => {
    const key = process.env.JWT_SECRET;
    let decode = null;
    try {
        decode = jsonwebtoken_1.default.verify(token, key);
    }
    catch (error) {
        console.log(error);
    }
    return decode;
};
const checkTokenUser = (req, res, next) => {
    if (req.cookies.user) {
        next();
    }
    else {
        res.send({ errCode: 1, message: "Please log in to continue" });
    }
};
const JwtAcion = { createJWT, verifyToken, checkTokenUser };
exports.default = JwtAcion;
