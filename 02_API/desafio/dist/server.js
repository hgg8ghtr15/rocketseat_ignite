"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const porta = 3000;
app.use(express_1.default.json());
app.get("/", (request, response) => {
    return response.status(200).send("Servidor configurado!");
});
app.listen(porta, () => {
    console.log(`Servidor iniciado em http://localhost:${porta}`);
});
