import { UsuarioRepositorio } from "../../repositorio/implementacao/UsuarioRepositorio"
import { CriarUsuarioUseCase } from "./CriarUsuarioUseCase"
import { CriarUsuarioController } from "./CriarUsuarioController"

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const criarUsuarioUseCase = new CriarUsuarioUseCase(usuarioRepositorio)
const criarUsuarioController = new CriarUsuarioController(criarUsuarioUseCase)

export { criarUsuarioController}

