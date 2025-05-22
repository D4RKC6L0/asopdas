const express =  require('express')

const porta = 8000

const server = express()

server.use(express.json());

server.options('/', (req, res) => {
    res.status(200).send({msg:'tudo ok'})
})