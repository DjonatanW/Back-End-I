console.log(nome)
var nome = 'Djonatan'

var profissao = 'Programador'
console.log(profissao)

// Não pode chamar a variavel antes de declarar ela 
/*
console.log(cidade)
let cidade = 'Bom Principio'

console.log(cidadeConst)
const cidadeConst = 'Bom Principio'
*/

// Fora do bloco não pode usar as variaveis declaradas dentro com const e let
/*
{
  var carro = 'Fusca'
  const ano = 2018
  let marca = 'Volkswagen'
}

console.log(carro)
console.log(ano)
console.log(marca)
*/


// if (true) {
//   var marca = 'Volkswagen'
//   console.log(marca)
// }
// console.log(marca)


// if (false) {
//   var marca = 'Volkswagen'
//   console.log(marca)
// }
// console.log(marca)

// if (true) {
//   const marca = 'Volkswagen'
//   console.log(marca)
// }
// console.log(marca)

// Se usar const para declarar variáveis, precisa inicializar com um valor.
// let name
// const a = 'a'

// if(true) {
//   name = 'Djonatan'
// }
// console.log(name)

// for (var i = 0; i <= 10; i++) {
//   console.log(`Número ${i}`)
// }
// // Vazou o escopo 
// console.log(i)

// const mes = 'Janeiro'
// mes = 'Fevereiro'

let dados = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2024
}

//dados = 'Maio'
dados.mes = 'Janeiro'

console.log(dados)





