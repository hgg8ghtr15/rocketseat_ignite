import express from 'express'

import {categoriaRouter} from './routes/categorias.routes'


const app = express()
const port = 3000

// rocketseat_ignite\02_API\02_criando_api

app.use(express.json())

app.use("/categoria", categoriaRouter)

app.listen(port, ()=> {
    console.log(`O servidor esta rodando em http://localhost:${3000}`)
})