import { EspecificacaoRepositorio } from "../../repositories/implementations/EspecificacaoRepositorio";
import { CreateEspecificacaoUseCase } from "./CreateEspecificacaoUseCase";
import { CreateEspecificacaoController } from "./CreateEspecificacaoController";



const especificacaoRepositorio = EspecificacaoRepositorio.getInstance()
const createEspecificacaoUseCase = new CreateEspecificacaoUseCase(especificacaoRepositorio)
const createEspecificacaoController = new CreateEspecificacaoController(createEspecificacaoUseCase)

export { createEspecificacaoController }