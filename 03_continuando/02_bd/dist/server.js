"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/", (request, response) => {
    response.status(200).send("Mensagem de Teste");
});
app.listen(port, () => {
    console.log(`O servidor esta rodando em http://localhost:${3000}`);
});
