"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/", routes_1.criarCurso);
app.listen(port, () => {
    console.log(`O servidor foi iniciado em http://localhost:${port}`);
});
