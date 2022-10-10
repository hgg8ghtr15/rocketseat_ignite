import { ListarEspecificacaoUseCase } from './ListarEspecificacaoUseCase'
import  { Request, Response } from 'express'


class ListarEspecificacaoController {
    constructor( private listarEspecificacaoUseCase: ListarEspecificacaoUseCase){}

    handle(request: Request, response: Response): Response {
        const especificacao = this.listarEspecificacaoUseCase.execute()

        return response.status(200).json(especificacao)
    }

}

export { ListarEspecificacaoController }