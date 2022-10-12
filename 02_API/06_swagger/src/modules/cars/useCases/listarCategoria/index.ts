import { CategoriaRepositorio } from "../../repositories/implementations/categoriaRepositorio";
import { ListarCategoriaUseCase } from "./ListarCategoriaUseCase";
import { ListarCategoriaController } from "./ListarCategoriaController";

const categoriaRepositorio = CategoriaRepositorio.getInstance()
const listarCategoriaUseCase = new ListarCategoriaUseCase(categoriaRepositorio)
const listarCategoriaController = new ListarCategoriaController(listarCategoriaUseCase)


export { listarCategoriaController }