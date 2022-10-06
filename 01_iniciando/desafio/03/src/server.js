const express = require('express');
const app = express();
const { v4: uuidV4 } = require('uuid');


const porta = 3000
app.use(express.json());

const repositorios = []


function validaTitulo(request, response, next){
    const { titulo } = request.body
    const tituloIsValid = repositorios.some((repositorio) => repositorio.titulo === titulo)
    
    if(tituloIsValid) {
        return response.status(202).send("Repositorio já existe!")
    }
    return next()
}

function retornaRepositorio(request, response, next){
    const {id} = request.params
    const repositorio = repositorios.find((repositorio) => repositorio.id === id)

    if(!repositorio) {
        return response.status(404).send("Repositorio não existe!")
    }

    request.repositorio = repositorio
    return next()
}

app.get("/repositories", (request, response)=>{
    return response.status(200).json(repositorios)
})

app.post("/repositories", validaTitulo,(request, response)=>{
    const { titulo } = request.body
    const url = `http://localhost:${porta}/${titulo.replace(/\s+/g, '').toLowerCase()}`

    const repositorio = {
        id: uuidV4(),
        titulo,
        url,
        likes: 0,
        techs: []
    }
    repositorios.push(repositorio)
    return response.status(201).json(repositorio)
})

app.put("/repositories/:id", retornaRepositorio, validaTitulo,(request, response)=>{
    const { id } = request.params
    const { repositorio } = request
    const { titulo } = request.body
    const url = `http://localhost:${porta}/${titulo.replace(/\s+/g, '').toLowerCase()}`
    
    repositorio.titulo = titulo
    repositorio.url = url //    
    return response.status(200).send(id)
})

app.delete("/repositories/:id", retornaRepositorio,(request, response)=>{
    const { repositorio } = request

    repositorios.splice(repositorio, 1)

    return response.status(204).send("Repositorio Excluido com sucesso!")
})


app.post("/repositories/:id/like", retornaRepositorio,(request, response)=>{
    const { repositorio } = request
    repositorio.likes += 1

    return response.status(201).json(repositorio)
})
app.listen(porta, ()=>{
    console.log(`Servidor iniciado na url http://localhost:${porta}`);
});