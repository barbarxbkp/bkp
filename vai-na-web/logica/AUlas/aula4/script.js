//If e Else
//Bonus

//4 - criar uma condição que exiba uma mensagem no console se 
// seu nome começa com r e imprima no console

// let nome = "barbara"

// if (nome.substring(0, 1) === "B" || nome.substring(0,1) === "b") {
//   console.log('true')
// } else {
//   console.log('false')
// }


// length = conta cada unidade de codigo dea string => propriedada da string
let name = "Barbara"
let surname = "Araujo"

if (surname.length > 6 || name.substring(0,1) === "B") {
  console.log('seu sobrenome tem mais de 6 letras ou seu nome começa com B')
  
} else {
  console.log('seu sobrenome nao tem mais de 6 letras ou nao começa com B')
}

// Funções 
// funções em js sao um conjunto de instruções que realiza alguma tarefa

//estrutura basica de uma função

// function identificador() {
//   tarefa
// }

function helloWord() {
  console.log("ola")
}

helloWord()

//function com parametro

function mostrarNome(nome) {
  console.log(`meu nome é ` + `${nome}`)
}


// mostrarNome(`juselina`) //argumentos
// mostrarNome(`lo`)

let outroNome = "barbara"

mostrarNome(outroNome)


// funçao com return 

function double(n) {
  return n*20
}
console.log(double(2))

//guardando resultado em uma variavel

function soma(x, y) {
  return x + y
}
let result = soma(5, 90)

console.log(result)