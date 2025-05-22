const express =  require('express')

const porta = 8000

const server = express()

server.use(express.json());

server.options('/', (req, res) => {
    res.status(200).send({msg:'tudo ok'})
})

server.post('/receber_nome',(req,res) =>{
    const nome=req.body.nome
    if (nome){
        registrar()
        res.status(200).send({msg:'Nome recebido'})
    }
    else {
        registrarf()
        res.status(400).send({msg:'Nome não recebido'})
    }
    })

    server.post('/receber_id',(req,res) =>{
        const IDac=req.body.id
        pesquisa()
    })    
    server.listen(porta, () =>{console.log('servidor rodando')})