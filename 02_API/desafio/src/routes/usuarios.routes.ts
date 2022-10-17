import { Router } from "express"

import { criarUsuarioController } from "../modules/Usuario/useCase/criarUsuario"
import { listarUsuarioController } from '../modules/Usuario/useCase/listarTodosUsuario'
import { listarUsuarioIdController } from '../modules/Usuario/useCase/listarUsuarioId'

const usuariosRouter = Router()

usuariosRouter.post("/", (request, response)=>{
    return criarUsuarioController.handle(request, response)
})

// usuariosRouter.patch("/:usuario_id/admin", (request, response)=>{
//     return response.status(200).send("Rota Criada")
// })

usuariosRouter.get("/", (request, response)=>{
    return listarUsuarioController.handle(request, response)
})

usuariosRouter.get("/:usuario_id", (request, response)=>{
    return listarUsuarioIdController.handle(request, response)
})

export { usuariosRouter }