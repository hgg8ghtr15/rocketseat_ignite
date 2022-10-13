import { Request, Response } from 'express'
import { CriarUsuarioUseCase } from "./CriarUsuarioUseCase"

class CriarUsuarioController {

    constructor(private criarUsuarioUseCase: CriarUsuarioUseCase) {}

    handle(request: Request, response: Response): Response {
        const { nome, email } = request.body

        const mensagem = this.criarUsuarioUseCase.execute({ nome, email})

        return response.status(200).send(mensagem)
    }

}

export { CriarUsuarioController}