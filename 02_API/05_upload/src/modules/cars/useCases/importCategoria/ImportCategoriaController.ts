import { Request, Response } from 'express'
import { ImportCategoriaUseCase } from './ImportCategoriaUseCase'


class ImportCategoriaController {

    constructor(private importCategoriaUseCase: ImportCategoriaUseCase){}

    handle(request:Request, response: Response): Response {
        const { file } = request
        // console.log("Teste")
        this.importCategoriaUseCase.execute(file)
        // console.log(file)
        return response.send("Arquivo recebido")
    }

}

export { ImportCategoriaController}