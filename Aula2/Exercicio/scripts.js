let peso1 = 2
let peso2 = 3
let peso3 = 5

let nota1 = 7
let nota2 = 7
let nota3 = 7 

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)/(peso1 + peso2 + peso3)

if (mediaPonderada >= 7) {
  console.log("O aluno foi aprovado! Sua média foi " + mediaPonderada)
} else { 
  console.log("O aluno foi reprovado. Sua média foi " + mediaPonderada)
} 


let dia = 11
let mes = 2
let ano = 1996

let totalDiasIdade = (ano * 365) + (mes * 30) + dia

let diasAtual = 14
let mesAtual = 8
let anosAtual = 2024

let totalDiasAtuais = (anosAtual * 365) + (mesAtual * 30) + diasAtual

let idadeDias = totalDiasAtuais - totalDiasIdade

console.log('A idade é ' + idadeDias + ' dias.')

let num1 = 5
let num2 = 3

let soma = num1 + num2

let subtracao = num1 - num2

let multiplicacao = num1 * num2
 
let divisao = num1 / num2
 
console.log('Soma:'+ soma + ' Subtração:' + subtracao +
            ' Multiplicação:' + multiplicacao + ' Divisão:' + divisao )

let numero1 = 8
if (numero1 % 2 == false) {
  console.log('O número é par.')
} else {
  console.log('O número é impar.')
}