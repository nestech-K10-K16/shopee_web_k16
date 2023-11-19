"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHashPassword = exports.hashPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
// hash password
const hashPassword = (password) => {
    const salt = (0, bcryptjs_1.genSaltSync)(10);
    const hash = (0, bcryptjs_1.hashSync)(password, salt);
    return hash;
};
exports.hashPassword = hashPassword;
const checkHashPassword = (password, hashPassword) => {
    return (0, bcryptjs_1.compareSync)(password, hashPassword);
};
exports.checkHashPassword = checkHashPassword;
