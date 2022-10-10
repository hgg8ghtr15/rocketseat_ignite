import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase";
import { Request, Response } from "express"

class CreateEspecificacaoController {
    constructor( private createEspecificacaoUseCase: CreateEspecificacaoUseCase){}

    handle(request: Request, response: Response): Response {
        const { name, descricao} = request.body

        this.createEspecificacaoUseCase.execute({name, descricao})

        return response.status(201).send("Especificacao criada com sucesso!")
    }

}

export { CreateEspecificacaoController}