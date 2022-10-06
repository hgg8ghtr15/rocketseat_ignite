"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCurso = void 0;
const CriaCursoServico_1 = __importDefault(require("./CriaCursoServico"));
function criarCurso(request, response) {
    const curso = {
        nome: "Node",
        duratcao: 10,
        educador: "Fabio"
    };
    CriaCursoServico_1.default.execute(curso);
    return response.send(curso);
}
exports.criarCurso = criarCurso;
