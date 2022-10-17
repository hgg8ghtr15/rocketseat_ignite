import { Request, Response } from "express"
import { ListarUsuarioIdUseCase } from "./ListarUsuarioIdUseCase"

class ListarUsuarioIdController {

    constructor( private listarUsuarioIdUseCase: ListarUsuarioIdUseCase){}

    handle(request: Request, response: Response): Response {
        const { usuario_id } = request.params
        const usuario = this.listarUsuarioIdUseCase.execute({usuario_id})
        return response.status(200).json(usuario)
    }
}
export { ListarUsuarioIdController }
