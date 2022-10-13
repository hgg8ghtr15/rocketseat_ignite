import express  from "express"

import { router } from "./routes"

const app = express()
const porta = 3000

app.use(express.json())

app.use(router)

app.listen(porta, () => {
    console.log(`Servidor iniciado em http://localhost:${porta}`)
})