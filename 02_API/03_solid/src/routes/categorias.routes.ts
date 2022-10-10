import { Router } from 'express'
import { CategoriaRepositorio } from '../repositories/categoriaRepositorio'
import { PostgreeRepositorio  } from '../repositories/PostgreeRepositorio'
import {CreateCategoriaService } from '../services/CreateCategoriaService'

const categoriaRouter = Router()
const categoriaRepositorio = new CategoriaRepositorio()
// const categoriaRepositorio = new PostgreeRepositorio()

categoriaRouter.post("/", (request, response) => {
    const {name, descricao} = request.body
    
    const createCategoriaService = new CreateCategoriaService(categoriaRepositorio)
    createCategoriaService.execute({name, descricao})

    return response.status(201).send("Criado com sucesso!")
})

categoriaRouter.get("/", (request, response) => {
    const categorias = categoriaRepositorio.list()
    return response.status(200).json(categorias)
})


export {categoriaRouter}