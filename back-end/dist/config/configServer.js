"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const ConfigServer = (app) => {
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "https://tranhoaihan01.web.app");
        res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        next();
    });
    // config body parser
    app.use(body_parser_1.default.json({ limit: "100mb" }));
    app.use(body_parser_1.default.urlencoded({ extended: false, limit: "100mb" }));
    // config cookie parser
    app.use((0, cookie_parser_1.default)());
};
exports.default = ConfigServer;
