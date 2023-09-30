"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const common_1 = __importDefault(require("./config/common"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
//config  
(0, common_1.default)(app);
//router
app.use("/", routers_1.default);
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
