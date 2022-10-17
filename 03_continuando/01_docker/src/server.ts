import express from 'express'
import swaggerUi from "swagger-ui-express"

import { router} from './routes'
import swaggerArquivo from './swagger.json'

const app = express()
const port = 3000

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerArquivo))

app.use(router)

app.listen(port, ()=> {
    console.log(`O servidor esta rodando em http://localhost:${3000}`)
})