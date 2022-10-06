"use strict";
/**
 * nome - string
 * duratcao - number
 * educador - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CriaCursoServico {
    execute({ nome, duratcao, educador }) {
        console.log(nome, duratcao, educador);
    }
}
exports.default = new CriaCursoServico;
