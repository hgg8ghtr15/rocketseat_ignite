import express from 'express'

import { categoriaRouter } from './routes/categorias.routes'
import { especificacaoRoutes } from './routes/especificacao.routes'


const app = express()
const port = 3000

// rocketseat_ignite\02_API\04_continuacao

app.use(express.json())

app.use("/categoria", categoriaRouter)
app.use("/especificacao", especificacaoRoutes)

app.listen(port, ()=> {
    console.log(`O servidor esta rodando em http://localhost:${3000}`)
})