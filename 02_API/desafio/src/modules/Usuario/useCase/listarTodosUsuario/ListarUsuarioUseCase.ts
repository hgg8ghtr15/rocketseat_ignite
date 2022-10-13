import { Usuario } from "../../model/Usuario"
import { IUsuarioRepositorio } from "../../repositorio/IUsuarioRepositorio"

class ListarUsuarioUseCase {

    constructor(private usuarioRepositorio:IUsuarioRepositorio ){}

    execute(): Usuario [] {
        const usuarios = this.usuarioRepositorio.listarTodos()
        return usuarios
    }

}

export { ListarUsuarioUseCase }