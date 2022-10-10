import { Router } from 'express'

import { createCategoriaController } from '../modules/cars/useCases/createCategoria'
import { listarCategoriaController } from '../modules/cars/useCases/listarCategoria'

const categoriaRouter = Router()

categoriaRouter.post("/", (request, response) => {
    return createCategoriaController.handle(request, response)
})

categoriaRouter.get("/", (request, response) => {
    return listarCategoriaController.handle(request, response)
})


export {categoriaRouter}