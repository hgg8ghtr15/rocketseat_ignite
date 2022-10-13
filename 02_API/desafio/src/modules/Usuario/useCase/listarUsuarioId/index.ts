import { UsuarioRepositorio } from "../../repositorio/implementacao/UsuarioRepositorio"
import { ListarUsuarioIdUseCase } from "./ListarUsuarioIdUseCase"
import { ListarUsuarioIdController } from "./ListarUsuarioIdController"

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const listarUsuarioIdUseCase = new ListarUsuarioIdUseCase(usuarioRepositorio)
const listarUsuarioIdController = new ListarUsuarioIdController(listarUsuarioIdUseCase)

export { listarUsuarioIdController }