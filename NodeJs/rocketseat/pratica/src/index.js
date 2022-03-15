const { request, response } = require('express');
const express = require('express');

const app = express();

//middle que faz entender que estamos trabalhando com json no body params
app.use(express.json());

/*

* Tipos de parametros 

* Route Params => Identificar um recurso editar/deletar/buscar
ex:
http://localhost:3031/courses/1
* Query Params => Paginação / Filtro 
ex:
http://localhost:3031/courses?page=1&order=desc
* Body Params => os objetos que vamos passar para a inserção/alteração de algum recurso
ex:


*/

app.get('/courses', (request, response) => {
  const query = request.query
  console.log(query)
  //default
  return response.json(["curso 1", "curso 2", "curso 3"])
  //send serve para escrever uma mensagem
  // return response.send('servidor funfando')
})
app.post('/courses', (request, response) => {
  const body = request.body
  console.log(body)
  return response.json(["curso 1", "curso 2", "curso 3", "curso 4"])
})
app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  console.log(id)
  return response.json(["curso 6", "curso 2", "curso 3", "curso 4"])
})
app.patch('/courses/:id', (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 3", "curso 4"])
})
app.delete('/courses/:id', (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 4"])
})
// localhost:3031
app.listen(3031);
