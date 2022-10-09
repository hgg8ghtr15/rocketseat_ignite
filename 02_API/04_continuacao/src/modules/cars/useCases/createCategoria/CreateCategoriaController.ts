import { Request, Response } from 'express';
import { CreateCategoriaUseCase} from './CreateCategoriaUseCase'

class CreateCategoriaController {

    constructor(private createCategoriaUseCase: CreateCategoriaUseCase){}

    handle(request: Request, response: Response): Response{
        const {name, descricao} = request.body
        
        this.createCategoriaUseCase.execute({name, descricao})

        return response.status(201).send("Criado com sucesso!")
    }
}

export {CreateCategoriaController}