import {Request, Response} from 'express'
import { ListarCategoriaUseCase } from './ListarCategoriaUseCase'


class ListarCategoriaController {

    constructor( private listarCategoriaUseCase:ListarCategoriaUseCase){

    }

    handle(request: Request, response: Response): Response{
        const categorias = this.listarCategoriaUseCase.execute()
        
        return response.status(200).json(categorias)
    }

}

export {ListarCategoriaController}