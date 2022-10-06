
import { Request, Response } from "express";
import CriaCursoServico from "./CriaCursoServico";


export function criarCurso( request:Request, response:Response ){

    const curso = {
        nome:"Node", 
        duratcao: 10, 
        educador:"Fabio"
    }

    CriaCursoServico.execute(curso)

    return response.send(curso)
}