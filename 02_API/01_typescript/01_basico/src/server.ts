import express from 'express'
import { criarCurso } from './routes'

const app = express()
const port = 3000

app.use(express.json())

app.get("/", criarCurso)

app.listen(port, ()=>{
    console.log(`O servidor foi iniciado em http://localhost:${port}`)
})