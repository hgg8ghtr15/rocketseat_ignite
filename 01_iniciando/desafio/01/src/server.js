const express = require('express');
const { v4: uuidV4} = require('uuid');

const app = express();

const porta = 3000

app.use(express.json());

const usuarios = []

function usuarioExiste(request, response, next) {
    const {username, iduser} = request.headers
    // console.log(request.headers)
    const usuario = usuarios.find((usuario) => {
        if (usuario.username === username || usuario.id == iduser){
            return usuario
        }
    })
    
    if (!usuario){
        return response.status(200).send(`O usuario não existe!`)
    }

    request.usuario = usuario
    return next()
}

function tarefaExiste(request, response, next) {
    const {username} = request.headers
    const usuario = usuarios.find((usuario) => usuario.username === username)
    const {id} = request.params

    if (!usuario){
        return response.status(200).send(`O usuario não existe!`)
    }

    const tarefa = usuario.todos.find((tarefa) => tarefa.id === id)

    if(!tarefa){
        return response.status(200).send("Esta tarefa não existe")
    }

    request.usuario = usuario
    request.tarefa = tarefa
    return next()
}

function usuarioAvaliacao(request, response, next) {
    const {usuario} = request

    if(usuario.tipoConta === "free"){
        if( usuario.todos.length >= 10 ){
            return response.status(200).send("Adiquira uma conta premium")
        }
    }

    return next()
}


app.get("/usuario_todos",(request, response) =>{
    return response.status(200).json(usuarios)
})

app.get("/usuario", usuarioExiste,(request, response) =>{
    const { usuario } = request

    return response.status(200).json(usuario)
})

app.post("/usuario", (request, response) =>{
    const {name, username} = request.body

    const validaUsuario = usuarios.some((usuario)=> usuario.username === username)

    if(validaUsuario){
        return response.status(200).send("Usuario Já existe")
    }

    const usuario = {
        id: uuidV4(),
        name,
        username,
        tipoConta: "free",
        todos: []
    }

    usuarios.push(usuario)
    return response.status(200).json(usuario)
})

app.put("/usuario", usuarioExiste,(request, response) =>{
    const {name} = request.body
    const {usuario} = request

    usuario.name = name
    return response.status(200).send("Usuario auterado com sucesso!")
})

app.get("/todos", usuarioExiste,(request, response) =>{
    const { usuario } = request
    return response.status(200).json(usuario.todos)

})

app.post("/todos", usuarioExiste, usuarioAvaliacao, (request, response) =>{
    const { usuario } = request
    const { titulo } = request.body

    const tarefa = {
        id: uuidV4(),
        titulo,
        concluida: false,
        terminoData: null,
        criacaoData : new Date()
    }
    usuario.todos.push(tarefa)
    return response.status(200).json(tarefa)
})

app.put("/todos/:id", tarefaExiste,(request, response) =>{
    const {tarefa} = request
    const { titulo, terminoData} = request.body

    tarefa.titulo = titulo
    tarefa.terminoData = new Date(terminoData + " 00:00")

    return response.status(200).json(tarefa)
})

app.patch("/todos/:id/concluir", tarefaExiste,(request, response) =>{
    const { tarefa } = request

    tarefa.concluida = true
    return response.status(200).json(tarefa)
})

app.delete("/todos/:id", tarefaExiste,(request, response) =>{
    const { tarefa, usuario} = request

    usuario.todos.splice(tarefa, 1)
    return response.status(200).json(usuario.todos)
})

app.listen(porta, () => {
    console.log(` Servidor iniciado em http://localhost:${porta}`)
})


