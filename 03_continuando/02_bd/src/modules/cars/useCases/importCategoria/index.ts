import { CategoriaRepositorio } from "../../repositories/implementations/categoriaRepositorio";
import { ImportCategoriaController } from "./ImportCategoriaController"
import { ImportCategoriaUseCase } from "./ImportCategoriaUseCase";

const categoriaRepositorio = CategoriaRepositorio.getInstance()
const importCategoriaUseCase = new ImportCategoriaUseCase(categoriaRepositorio);
const importCategoriaController = new ImportCategoriaController(importCategoriaUseCase)

export { importCategoriaController }