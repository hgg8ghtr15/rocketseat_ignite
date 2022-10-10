import { Router } from 'express'
import { CategoriaRepositorio } from '../repositories/categoria.Repositorio'

const categoriaRouter = Router()
const categoriaRepositorio = new CategoriaRepositorio()


categoriaRouter.post("/", (request, response) => {
    const {name, descricao} = request.body

    const categoriaExiste = categoriaRepositorio.findByName(name)

    if (categoriaExiste) {
        return response.status(400).send("Categoria Existe!")
    }

    categoriaRepositorio.create({name, descricao})

    return response.status(201).send("Criado com sucesso!")
})

categoriaRouter.get("/", (request, response) => {
    const categorias = categoriaRepositorio.list()
    return response.status(200).json(categorias)
})


export {categoriaRouter}