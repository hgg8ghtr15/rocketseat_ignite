import { UsuarioRepositorio } from '../../repositorio/implementacao/UsuarioRepositorio'
import {ListarUsuarioUseCase } from './ListarUsuarioUseCase'
import { ListarUsuarioController } from './ListarUsuarioController'

const usuarioRepositorio = UsuarioRepositorio.getInstance()
const listarUsuarioUseCase = new ListarUsuarioUseCase(usuarioRepositorio)
const listarUsuarioController = new ListarUsuarioController(listarUsuarioUseCase)

export { listarUsuarioController }