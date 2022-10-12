import { Router } from 'express'
import multer from 'multer'

import { createCategoriaController } from '../modules/cars/useCases/createCategoria'
import { listarCategoriaController } from '../modules/cars/useCases/listarCategoria'
import { importCategoriaController } from '../modules/cars/useCases/importCategoria'

const categoriaRouter = Router()

const upload = multer({
    dest:"./tmp"
})

categoriaRouter.post("/", (request, response) => {
    return createCategoriaController.handle(request, response)
})

categoriaRouter.get("/", (request, response) => {
    return listarCategoriaController.handle(request, response)
})

categoriaRouter.post("/import", upload.single("file"), (request, response) => {
    return importCategoriaController.handle(request, response)
})


export {categoriaRouter}