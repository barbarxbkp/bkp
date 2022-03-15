//1 - Crie uma condição que exiba uma mensagem no console se estiver a noite, senão retorne no console que ainda não anoiteceu

var hora = 18.00

if (hora >= 18.00) {
  console.log('boa noite')
} else {
  console.log('bom dia! =)')
}
//2 - Crie uma condição que exiba uma mensagem no console se você for comer lasanha E o sabor for bolonhesa
let comida = 'lasanha'
let sabor = 'bolonhesa'

if (comida === 'lasanha' && sabor ==='bolonhesa') {
  console.log('vou comer')
} else {
  console.log('dispenso')
}
//3 - Criar uma condição que exiba uma mensagem no console se você estiver de férias OU estiver Sol
var ferias = true
var tempo = 'sol'

if (ferias === true || tempo === 'sol') {
  console.log('praiouu')
} else {
  console.log('netflix')
}

//1 - Criar um loop que conte de 1 até 20 usando o FOR que conte os números ímpares

for (let i = 1; i <= 20; i += 2) {
  console.log(i)
}

//2 - Criar um loop que conte de 20 até 1 usando o WHILE que conte os números pares

let p = 20
while (p >= 1) {
  console.log(p)
  p -= 2
}

// 1 - Crie uma função que receba comida como (parâmetro) e exiba no console

function gostoDeComer(comida) {
console.log(comida)
}
gostoDeComer('macarrao')
// 2 - crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e exiba no console

function things(personagem, cidade, fruta) {
  console.log('o meu personagem é: ' + `${personagem}`);
  console.log('a minha cidade é: ' + `${cidade}`);
  console.log('a minha fruta é: ' + `${fruta}`);
}

things("homem aranha", "sao jose dos campos", "banana");

let jogos = ['zelda', 'gta', 'mario', 'sonic mania', 'god of war', 'the witcher']

// 1- Utilize um método para adicionar dois jogos ao fim do array

jogos.push('valorant', 'csgo')

console.log(jogos)

// 2 - Utilize um método para remover o o último jogo dentro do array.

jogos.pop()
console.log(jogos)

// 3 - Utilize um método para organizar os jogos em ordem alfabética
jogos.sort()
console.log(jogos)

const pessoas = [
  {
    nome: 'iron man',
  }, {
    nome: 'pink floyd',
  }, {
    nome: 'ricky e morty',
  }
]