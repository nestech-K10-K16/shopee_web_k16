"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const Connection = (0, promise_1.createPool)({
    host: "localhost",
    port: 3306,
    database: "shoppe",
    user: "root",
    password: "123456",
});
exports.default = Connection;
