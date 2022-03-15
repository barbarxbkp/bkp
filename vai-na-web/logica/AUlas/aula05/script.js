// array
// []
// [] é uma lista

let nomes = ["barbara", "pamela", "thalita", "tartarugita"]

// console.log(nomes)
// let dados = ["racchel", 6, true]

// arr.splice(x, y) -> remove, adiciona ou substitui

/* primeiro parametro: é o indice do elemento, adicionado, removido ou substituido
segundo parametro: é o numero dos elementos que vao ser adicionados, removidos ou substituidos
terceiro parametro: o elemento a ser adicionado ou substituido
*/

//remover
//primeira a posição de elemento e a quantidade que quero remover
// nomes.splice(0, 3)
//   console.log(nomes)

//adicionar
// nomes.splice(0, 0, "teste")
// console.log(nomes)

//subsituir
// nomes.splice(1, 1, "pum")
// console.log(nomes)

//Objeto
// {}

let bandas = ["pink floyd", 1965, true, "metalica", 1970, false]
console.log(bandas)

console.log(bandas[0])

//length conta a partir de 1
// index conta a partr de 0

//estrutura
// objeto coleção de dados

// const nome = {
//   propriedade: valor,
//   propriedade: valor,
//   propriedade: valor,
// }

const pessoa = {
  nome: "Babi",
  idade: 24,
  humano: true,
  bandas: ["pink floyd", "red hot chilli pepers"]
}
console.log(pessoa.bandas[1])
console.log(pessoa.humano)

//adicionando uma nova propriedade dentro do objeto
pessoa.time = "SP"
console.log(pessoa)

//deletando
delete pessoa.humano
console.log(pessoa)

// array de objetos

//[{}, {}, {}]

const cadastro = [
  {
    nome: 'fulano',
    idade: 20,
    amigos: ['robson', 'itachi']
  }, {
    nome: 'cleide',
    idade: 50,
    amigos: ['madara', 'quarkus']
  }, {
    nome: 'ricky e morty',
    idade: 20,
    amigos: 'nenhum'
  }
]
console.log(cadastro[0])
console.log(cadastro[0].amigos[1])