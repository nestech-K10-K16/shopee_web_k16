"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const configServer_1 = __importDefault(require("./config/configServer"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
//config  
(0, configServer_1.default)(app);
//router
(0, routers_1.default)(app);
app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
