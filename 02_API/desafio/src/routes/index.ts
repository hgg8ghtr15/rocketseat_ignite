import { Router } from "express"

import { usuariosRouter } from "./usuarios.routes"

const router = Router()

router.use("/usuario", usuariosRouter)

export { router }