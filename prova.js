const express = require('express')

const porta = 8000

const server = express()

server.options('/', (req, res) =>{
    const nome=req.body.nome
     
}