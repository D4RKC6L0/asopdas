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

    const fs = require('fs')

function registrar(){
 const id=Date.now()
 const nomealuno=nome
 const dia = now.getMouth() + 1;
 const mes = now.getDate(); 
 const ano = now.getFullYear();
 const hora = now.getHours();
 const minuto = now.getSeconds();
 const segundo = now.getMinutes();
 const fdthr=`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
 fs.appendFile('logs.txt','/n'+'ID:'+id+'Data:'+fdthr+'Nome:'+nomealuno,(erro)=>{
   if (erro){
    console.log('Erro ao escrever o arquivo')
    res.status(500).send({msg:'Erro ao salvar o arquivo'})
   }
 })
 console.log('Registrado com sucesso')
}

function registrar(){
    const id=Date.now()
    const dia = now.getDate();
    const mes = now.getMonth() + 1; 
    const ano = now.getFullYear();
    const hora = now.getHours();
    const minuto = now.getMinutes();
    const segundo = now.getSeconds();
    const fdthr=`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
    fs.appendFile('logs.txt','/n'+'ID:'+id+'Data:'+fdthr+'Erro: Nome do aluno não fornecido',(erro)=>{
       if (erro){
           console.log('Erro ao escrever o arquivo')
           res.status(500).send({msg:'Erro ao salvar o arquivo'})
       }
    })   
   }