const { json } = require('express');
const express = require('express');
const {v4:uuidv4} = require('uuid');

const app = express();
const porta = 3000

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Bem vindo")
})

const clientes = []

/** Conta
 * 
 * CPF - string
 * name - string
 * id - uuid
 * estrato = []
 */

//middleware
function verificaSeExisteCPF(request, response, next){
    const {cpf} = request.headers
    const cliente = clientes.find((cliente) => cliente.cpf === cpf)

    if (!cliente){
        return response.status(400).json({error: "Cliente não cadastrado!"})
    }
    request.cliente = cliente
    return next()
}

app.post("/conta", (request, response) => {
    const { cpf, nome } = request.body;

    const clienteJaExiste = clientes.some((cliente)=> cliente.cpf === cpf)

    if (clienteJaExiste){
        return response.status(400).json({error: "Cliente já está cadastrado."})
    }
    console.log(clienteJaExiste)
    clientes.push({
        id:uuidv4(),
        nome,
        cpf,
        estrato: []
    })
    return response.status(201).send("Usuario criado com sucesso!")
})

// app.use(verificaSeExisteCPF) dodas as rotas usa

app.get("/estrato", verificaSeExisteCPF, (request, response)=> {
    const { cliente } = request
    return response.status(200).json(cliente.estrato)
})

app.post("/depositar", verificaSeExisteCPF, (request, response)=> {
    const { cliente } = request
    const { valor, descricao } = request.body

    const estratoOperacao = {
        descricao,
        valor,
        dataDeposito: new Date(),
        tipoOperacao: "Credito"
    }

    cliente.estrato.push(estratoOperacao)
    return response.status(201).json(estratoOperacao)
})

app.get("/estrato/data", verificaSeExisteCPF, (request, response)=>{
    const { cliente } = request
    const { data } = request.query

    const dataFormatada = new Date(data + " 00:00")

    const estrato = cliente.estrato.filter(
        (estrato) => 
        estrato.dataDeposito.toDateString() === 
        new Date(dataFormatada).toDateString()
    )
    return response.status(200).json(estrato)
})

app.listen(porta, ()=>{
    console.log(`servidor iniciado em http://localhost:${porta}`)
})
