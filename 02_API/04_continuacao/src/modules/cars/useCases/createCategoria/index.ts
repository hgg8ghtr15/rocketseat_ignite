import { CategoriaRepositorio } from "../../repositories/implementations/categoriaRepositorio";
import { CreateCategoriaController } from "./CreateCategoriaController";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";


const categoriaRepositorio = CategoriaRepositorio.getInstance()
const createCategoriaUseCase = new CreateCategoriaUseCase(categoriaRepositorio)
const createCategoriaController = new CreateCategoriaController(createCategoriaUseCase)

export { createCategoriaController }