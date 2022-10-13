import { Usuario } from "../../model/Usuario"
import { ICreateUsuarioDTO, IUsuarioRepositorio } from "../IUsuarioRepositorio"

class UsuarioRepositorio implements IUsuarioRepositorio {
    // Lista de usuario que sera retornada
    private usuarios: Usuario[] 

    // deixando meu repositorio statico
    private static INSTANCE: UsuarioRepositorio

    // deixando meu usuario como array
    private constructor(){
        this.usuarios = []
    }

    // aqui faz minha instancia ser unica 
    public static getInstance(): UsuarioRepositorio {
        // se ela nao existir eu crio
        if (!UsuarioRepositorio.INSTANCE) {
            UsuarioRepositorio.INSTANCE = new UsuarioRepositorio()
        }
        // retorno minha instancia de usuarioRepositorio
        return UsuarioRepositorio.INSTANCE
    }

    criar({ nome, email }: ICreateUsuarioDTO): void {
        const usuario = new Usuario()
        Object.assign(usuario, {
            nome, 
            email,
            admin: false,
            dataCriacao: new Date(),
            dataUpdate: new Date()
        })
        this.usuarios.push(usuario)
        // return "usuario"
    }

    listarUsuarioId(id: string): Usuario {
        const usuario = this.usuarios.find(usuario => usuario.id === id)
        return usuario
    }

    listarTodos(): Usuario[] {
        return this.usuarios
    }
    listarEmail(email:string):Usuario{
        const usuario = this.usuarios.find(usuario => usuario.email === email)
        return usuario
    }

    setAdmin(id: string): Usuario {
        throw new Error("Method not implemented.")
    }

}

export { UsuarioRepositorio }