import { Usuario } from "../../model/Usuario"
import { UsuarioRepositorio } from "../../repositorio/implementacao/UsuarioRepositorio"

interface IRequest {
    usuario_id: string
}

class ListarUsuarioIdUseCase{
    constructor(private usuarioRepositorio: UsuarioRepositorio){}

    execute({usuario_id}:IRequest):Usuario{
        console.log(usuario_id)
        const usuario = this.usuarioRepositorio.listarUsuarioId(usuario_id)
        if(!usuario){
            throw new Error("Usuario nao exeiste!")
        }

        return usuario
    }
}

export {ListarUsuarioIdUseCase}