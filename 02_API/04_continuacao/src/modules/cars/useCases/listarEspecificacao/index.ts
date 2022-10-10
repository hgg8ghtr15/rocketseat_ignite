import { EspecificacaoRepositorio } from "../../repositories/implementations/EspecificacaoRepositorio";
import { ListarEspecificacaoController } from "./ListarEspecificacaoController";
import { ListarEspecificacaoUseCase } from "./ListarEspecificacaoUseCase";

const especificacaoRepositorio = EspecificacaoRepositorio.getInstance()
const listarEspecificacaoUseCase = new ListarEspecificacaoUseCase(especificacaoRepositorio)
const listarCategoriaController = new ListarEspecificacaoController(listarEspecificacaoUseCase)

export { listarCategoriaController }
