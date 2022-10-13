import { IUsuarioRepositorio } from "../../repositorio/IUsuarioRepositorio"

interface IRequest{
    nome: string,
    email: string
}

class CriarUsuarioUseCase {

    constructor(private usuarioRepositorio:IUsuarioRepositorio){}

    execute({ nome, email}:IRequest): string {

        const usuarioExiste = this.usuarioRepositorio.listarEmail(email)

        if (usuarioExiste) {
            return "Usuario já existe"
        }
        
        this.usuarioRepositorio.criar({nome, email})
        return "Usuario Criado com sucesso"
    }

}

export { CriarUsuarioUseCase}