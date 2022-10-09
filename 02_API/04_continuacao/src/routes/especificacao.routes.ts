import { Router } from 'express'
import { CreateEspecificacaoService } from '../modules/cars/services/CreateEspecificacaoService'
import { EspecificacaoRepositorio } from '../modules/cars/repositories/EspecificacaoRepositorio'


const especificacaoRoutes = Router()
const especificacaoRepositorio = new EspecificacaoRepositorio()

especificacaoRoutes.post("/", (request,response) => {
    const {name, descricao} = request.body

    const createEspecificacaoService = new CreateEspecificacaoService(especificacaoRepositorio)
    createEspecificacaoService.execute({name, descricao})
    
    return response.status(201).send("Categoria Criada com sucesso!")
})

export { especificacaoRoutes }