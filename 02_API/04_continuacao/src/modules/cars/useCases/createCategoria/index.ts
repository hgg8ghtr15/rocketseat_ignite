import { CategoriaRepositorio } from "../../repositories/categoriaRepositorio";
import { CreateCategoriaController } from "./CreateCategoriaController";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";


const categoriaRepositorio = new CategoriaRepositorio()
const createCategoriaUseCase = new CreateCategoriaUseCase(categoriaRepositorio)
const createCategoriaController = new CreateCategoriaController(createCategoriaUseCase)

export { createCategoriaController }