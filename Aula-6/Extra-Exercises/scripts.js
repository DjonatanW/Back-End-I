//Exercise 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let somaPares = 0
for(const numero of numeros) {
  if (numero % 2 === 0) {
    somaPares += numero
  }
}
console.log(`A soma dos pares é ${somaPares}`)

//Exercise 2
let valores = [1, 2, 3, 8, 5, 6, 7, 4]
let maiorValor = 0 
for(const numero of valores) {
  if (maiorValor < numero) {
    maiorValor = numero
  }
}
console.log(`Maior valor do array é ${maiorValor}`)

//Exercise 3
let alunos = ['Ana', 'Djonatan', 'Bruna', 'Bruno', 'Pamela', 'Simone', 'Monica', 'Leticia', 'João', 'Pedro']

let nomeNovo = prompt('Digite o nome de um aluno')
let achou = false
for(const aluno of alunos) {
  if (aluno === nomeNovo) {
    achou = true
    break
  }
}
if (achou) {
  console.log(`Foi encontrado o aluno ${nomeNovo}`)
} else {
  console.log(`Não foi encontrado o aluno ${nomeNovo}`)  
}

//Exercicio 4
let contadorNotas = 0
let somaNotas = 0 
let continuar = true
do {
  let nota = parseFloat(prompt('Informe a nota do aluno'))
  if (isNaN(nota)|| nota < 0 || nota > 10) {
    alert('Nota informada inválida. Favor informar outra nota')
  } else {
    contadorNotas++
    somaNotas += nota
  }
  continuar = confirm("Deseja inserir mais notas?")
} while(continuar)
console.log(`A média do aluno foi ${somaNotas/contadorNotas} ${somaNotas/contadorNotas >= 7 ? 'Aprovado': 'Reprovado'}`)  