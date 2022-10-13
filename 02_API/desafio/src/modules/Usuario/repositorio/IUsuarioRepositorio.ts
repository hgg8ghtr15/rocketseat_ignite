import { Usuario } from "../model/Usuario"

interface ICreateUsuarioDTO{
    nome: string,
    email: string
}

interface IUsuarioRepositorio {
    criar({nome, email}:ICreateUsuarioDTO): void 
    listarUsuarioId(id:string): Usuario
    listarTodos():Usuario[]
    listarEmail(email:string): Usuario
    setAdmin(id:string):Usuario
}

export { ICreateUsuarioDTO, IUsuarioRepositorio }