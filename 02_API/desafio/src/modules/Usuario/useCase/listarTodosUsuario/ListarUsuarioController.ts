import { Request, Response } from "express";
import { ListarUsuarioUseCase } from "./ListarUsuarioUseCase";

class ListarUsuarioController {

    constructor (private listarUsuarioUseCase: ListarUsuarioUseCase){}

    handle(request: Request, response: Response): Response {
        const usuarios = this.listarUsuarioUseCase.execute()
        return response.status(200).json(usuarios)
    }
}

export { ListarUsuarioController}