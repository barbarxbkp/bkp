// declarando as quatros variaveis que vao receber as nossas dependecias, por exemplo
// apartir desse momento a variavel express vai ter toda a biblioteca do framework express,
// estamos chamando os pacotes e atribuindo as variaveis dentro do js, dessa forma as nossas 
// variaveis passam a ser do tipo dos nossos pacotes, possibilitando que utilizemos total funcionalidades
// que possuem neles 

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

// iniciando servidor

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// disponibilizando requisões
let db = [
  { '1': { Nome: 'CLiente 1', idade: '20' } },
  { '2': { Nome: 'CLiente 2', idade: '20' } },
  { '3': { Nome: 'CLiente 3', idade: '20' } }
]

// padrao de reuisicao: req = request e res = response 
// buscar dados
app.get('/', (req, res) => {
  return res.json(db)
})

// inserir dados
app.post('/add', (req, res) => {
  const body = req.body

//tratativa caso nao tenha o body
  if (!body) 
    return res.status(400).end()

    db.push(body)
    return res.json(body)  
})


//get = selecionar dados
//delete = deletar dados
//put = modificar dados
//post = inserir dados


//ligando o servidor
app.listen('3000', () => {
    console.log(`Express started at http://localhost:3000`)
})