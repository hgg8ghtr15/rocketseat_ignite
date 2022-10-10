import { Router} from "express";

import {categoriaRouter} from './categorias.routes'
import {especificacaoRoutes} from './especificacao.routes'

const router = Router()

router.use("/categoria", categoriaRouter )
router.use("/especificacao", especificacaoRoutes)

export { router }