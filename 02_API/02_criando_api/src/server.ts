import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get("/", (request, response) => {
    return response.status(200).send("Mensagem de Teste teste")
})

app.get("/curso", (request, response) => {
    const { nome } = request.body
    return response.json(nome)
})

app.listen(port, ()=> {
    console.log(`O servidor esta rodando em http://localhost:${3000}`)
})