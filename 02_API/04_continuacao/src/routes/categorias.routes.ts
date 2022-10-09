import { Router } from 'express'
import { CategoriaRepositorio } from '../modules/cars/repositories/categoriaRepositorio'
import { createCategoriaController } from '../modules/cars/useCases/createCategoria'
// import { PostgreeRepositorio  } from '../modules/cars/repositories/PostgreeRepositorio'
import {CreateCategoriaUseCase } from '../modules/cars/useCases/createCategoria/CreateCategoriaUseCase'

const categoriaRouter = Router()
const categoriaRepositorio = new CategoriaRepositorio()
// const categoriaRepositorio = new PostgreeRepositorio()

categoriaRouter.post("/", (request, response) => {
    return createCategoriaController.handle(request, response)
})

categoriaRouter.get("/", (request, response) => {
    const categorias = categoriaRepositorio.list()
    return response.status(200).json(categorias)
})


export {categoriaRouter}