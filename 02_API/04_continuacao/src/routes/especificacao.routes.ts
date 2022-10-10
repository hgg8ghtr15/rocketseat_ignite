import { Router } from 'express'
import { createEspecificacaoController } from '../modules/cars/useCases/createEspecificacao'
import { listarCategoriaController } from '../modules/cars/useCases/listarEspecificacao'

const especificacaoRoutes = Router()

especificacaoRoutes.post("/", (request,response) => {
    return createEspecificacaoController.handle(request, response)
})

especificacaoRoutes.get("/", (request,response) => {
    return listarCategoriaController.handle(request, response)
})

export { especificacaoRoutes }