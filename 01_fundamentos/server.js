const { query } = require('express');
const express = require('express');

const app = express()

app.use(express.json())

const porta = 3000

const cursos = ["curso1", "curso2", "curso3"]

// router parameters patch

// queryparams = pagination / filters
// queryparams = http://localhost:3000/cursos?page=2

// body parameters = insert e update


app.get("/", (req, res) => {
    // res.send("Deu Certo!")
    console.log("Teste")
    res.json({mensagem: "Deu Certo2"})
})

app.get("/cursos", (req, res) => {
    const query = req.query
    console.log(query)
    return res.json(cursos)
})

app.post("/cursos", (req, res) => {
    const body = req.body
    console.log(body)
    cursos.push("Cursos 4")
    return res.json(cursos)
})

app.put("/cursos/:id", (req, res) => {
    return res.json(cursos)
})


app.patch("/cursos/:id", (req, res) =>{
    const { id } = req.params
    console.log(id)
    return res.json(cursos)
})

app.delete("/cursos/:id", (req, res) =>{
    return res.json(cursos)
})

app.listen(porta, () =>{
    console.log(`Servidor rodando em http://localhost:${porta}`)
})