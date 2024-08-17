//Activity 1 
let age = 28
document.write("Minha idade é " + age + " anos. <br>")

//Activity 2 
let aux1 = 10
let aux2 = 20
let sumAux = aux1 + aux2
document.write("O resultado da soma de " + aux1 + " e " + aux2 + " é " + sumAux + ".<br>")

//Activity 3
let purchaseTotal = 149.90
let installments = 2
let installmentsValue = purchaseTotal / installments

document.write("O valor total da compra foi R$" + purchaseTotal.toFixed(2).replace('.',',') + ".<br>")
document.write("Forma de pagamento: " + installments + "x de R$" + installmentsValue.toFixed(2).replace('.',',') + ".<br>")

//Activity 4
let minutes = 120
let seconds = minutes * 60
document.write(minutes + " minutos equivale à " + seconds + " segundos. <br>") 

//Activity 5
let studentName = 'Djonatan'
let grade1 = 10
let grade2 = 10
let grade3 = 9
let average = (grade1 + grade2 + grade3) / 3
document.writeln("O aluno " + studentName + " ficou com média " + average.toFixed(2).replace('.',',') + ". <br>")

//Activity 6
let valueA = 10
let valueB = 20
let valueC = valueA
valueA = valueB
valueB = valueC
document.write("O valor de A é " + valueA + " o valor de B é " + valueB + "<br>")

//Activity 7
let totalVoters = 1000
let whiteVoters = 50
let nullVoters = 100
let validateVoters = (totalVoters - whiteVoters - nullVoters)

let whitePercentage = (whiteVoters / totalVoters) * 100
let nullPercentage = (nullVoters / totalVoters) * 100
let validadePercentage = (validateVoters / totalVoters) * 100

document.write("Percentual de votos brancos: " + whitePercentage.toFixed(2).replace('.',',') + "%. <br>")
document.write("Percentual de votos nulos: " + nullPercentage.toFixed(2).replace('.',',') + "%. <br>")
document.write("Percentual de votos válidos: " + validadePercentage.toFixed(2).replace('.',',') + "%. <br>")

//Activity 8
let valueRecive1  = prompt("Digite o primeiro valor:")
let valueRecive2  = prompt("Digite o segundo  valor:")
if (valueRecive1 == valueRecive2) {
  document.write('Números iguais. <br>')
} else if (valueRecive1 > valueRecive2) {
  document.write('Primeiro é maior. <br>')
} else {
  document.write('Segundo é maior. <br>')
}

//Activity 9
let countApple = prompt("Digite a quantidade de maçãs que deseja comprar:")
let valueApple = 0
if (countApple < 12) {
  valueApple = (countApple * 0.30)
} else {
  valueApple = (countApple * 0.25)
}
document.write('O total da compra será de R$' + valueApple.toFixed(2).replace('.',',') + ". <br>")

//Activity 10
let personName = prompt("Digite o nome de uma pessoa:")
let personAge = prompt("Digite a idade da pessoa:")
let personYearAge = new Date().getFullYear() - personAge
console.log('Nome: ' + personName + ', Idade: ' + personAge + ' anos, nasceu em ' + personYearAge)

//Activity 11
let numberInput = parseInt(prompt('Digite um número inteiro positivo'), 10)
if (numberInput > 0 ) {
  if (numberInput % 2 == 0) {
    alert('Número par')
  } else {
    alert('Número impar')
  }
} else {
  alert('Número digitado inválido')
}

//Activity 12
let yearAge = 2008
let currentYear = new Date().getFullYear()
if (currentYear - yearAge < 16) {
  console.log("Não poderá voltar esse ano")
} else {
  console.log("Poderá voltar esse ano")
}