// Activity 1 
let idadeMotorista = 0 
do {
  idadeMotorista = parseInt(prompt('Digite a idade do motorista'))
  if (isNaN(idadeMotorista) || idadeMotorista <= 0) {
    alert('Idade digita inválida. Favor informar a idade novamente')
  }
} while (isNaN(idadeMotorista) || idadeMotorista <= 0)
{
}
console.log(`${idadeMotorista >= 18 ? 'Pode dirigir': 'Não pode dirigir'}.`)

// Activity 2
let motoristaHabilitado = confirm('O motorista é habilitado')
console.log(`${idadeMotorista >= 18 && motoristaHabilitado ? 'Pode dirigir': 'Não pode dirigir'}.`)
  
// Activity 3

let diaDaSemana = parseInt(prompt('Digite o dia da semana em número'))

if (diaDaSemana === 1) {
  console.log('Domingo')
} else if (diaDaSemana === 2) {
  console.log('Segunda')
} else if (diaDaSemana === 3) {
  console.log('Terça')
} else if (diaDaSemana === 4) {
  console.log('Quarta')
} else if (diaDaSemana === 5) {
  console.log('Quinta')
} else if (diaDaSemana === 6) {
  console.log('Sexta')
} else if (diaDaSemana === 7) {
  console.log('Sábado')
} else {
  console.log('Dia não reconhecido')
}

// Activity 4
switch (diaDaSemana) {
  case 1:
    console.log('Domingo')
    break
  case 2:
    console.log('Segunda')
    break
  case 3:
    console.log('Terça')
    break
  case 4:
    console.log('Quarta')
    break
  case 5:
    console.log('Quinta')
    break
  case 6:
    console.log('Sexta')
    break
  case 7:
    console.log('Sábado')
    break
  default:
    console.log('Dia não reconhecido')
    break
}

// Activity 5
for(i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`${i}`)
  }
}

// Activity 6
let contadorImpares = 1

while(contadorImpares <= 30) {
  let numeroAleatorio = parseInt(((Math.random())*100))
  if (numeroAleatorio % 2 != 0) {
    document.write(`${numeroAleatorio}<br>`)
    contadorImpares++
  }
}

//Activity 7
let soma = 0
let numero = 10

do {
  soma += numero
  numero++
} while (numero <= 100)

console.log(`A soma de todos os números entre 10 e 100 é: ${soma}`)


//Activity 8
let salarioUsuario = 0 
do {
  salarioUsuario = parseFloat(prompt('Digite o salário do usuário'))
  if (isNaN(salarioUsuario) || salarioUsuario <= 0) {
    alert('Salário digito inválido. Favor informar o salário novamente')
  }
} while (isNaN(salarioUsuario) || salarioUsuario <= 0)
{
}
if (salarioUsuario < 1903.98) {
  document.write(`ISENTO DE IR<br>`)
} else {
  document.write(`TRIBUTADO NO IR<br>`)
}

//Activity 9
let numeroPrimo = 0 
do {
  numeroPrimo = parseInt(prompt('Digite um número'))
  if (isNaN(numeroPrimo)) {
    alert('Número digito inválido. Favor informar o número novamente')
  }
} while (isNaN(numeroPrimo))
{
}

let ehPrimo = true

if (numeroPrimo <= 1) {
  ehPrimo = false
} else {
  for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
    if (numeroPrimo % i === 0) {
      ehPrimo = false
      break
    }
  }
}

console.log(ehPrimo ? 'É número primo' : 'Não é número primo')

// Activity 10
let alturaPessoa = 1.75
let sexoPessoa = 2
let pesoIdeal

if (sexoPessoa === 1) {
  pesoIdeal = (62.1 * alturaPessoa) - 44.7
} else if (sexoPessoa === 2) { 
  pesoIdeal = (72.7 * alturaPessoa) - 58
} else {
  console.log('Sexo inválido')
}

console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`)

// Activity 11
let turnoEstuda = prompt('Digite M para matutino, V para vespertino ou N para noturno:')

switch (turnoEstuda.toUpperCase()) {
  case 'M':
    alert('Bom dia!')
    break
  case 'V':
    alert('Boa tarde')
    break
  case 'N':
    alert('Boa noite')
    break
  default:
    alert('Valor inválido')
    break
}

// Activity 12
let idadeDoadora = 0
do {
  idadeDoadora = parseInt(prompt('Digite a idade do doador'))
  if (isNaN(idadeDoadora) || idadeDoadora <= 0) {
    alert('Idade doador inválida. Favor informar a idade do doador novamente')
  }
} while (isNaN(idadeDoadora) || idadeDoadora <= 0)
{
}
console.log(idadeDoadora >= 18 && idadeDoadora <= 67 ? 'Você pode doar sangue.' : 'Você não pode doar sangue.')

// Activity 13

let numeroMaximoImpares
do {
  numeroMaximoImpares = parseInt(prompt('Digite até que número verificar os impares'))
  if (isNaN(numeroMaximoImpares) || numeroMaximoImpares <= 0) {
    alert('Número inválido. Favor informar outro número novamente')
  }
} while (isNaN(numeroMaximoImpares) || numeroMaximoImpares <= 0)
{
}

for (let i = 1; i <= numeroMaximoImpares; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// Activity 14
let numeroSomador = 5
let somaNumerica = numeroSomador

while (somaNumerica < 500) {
  numeroSomador *= 3
  somaNumerica = numeroSomador
}

console.log(`O último valor é: ${numeroSomador}`)

// Activity 15
let ladoA = 3
let ladoB = 4
let ladoC = 5

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log('Triângulo equilátero')
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log('Triângulo isósceles')
  } else {
    console.log('Triângulo escaleno')
  }
} else {
  console.log('Os valores fornecidos não formam um triângulo')
}

// Activity 16
let anoAtual = new Date().getFullYear()
let anoNascimento = 1996

let idadeFinalPessoa = anoAtual - anoNascimento

if (idadeFinalPessoa >= 16) {
  console.log('Você pode votar este ano.')
} else {
  console.log('Você não pode votar este ano.')
}

// Activity 17
let totalEleitores = 1000
let votosBrancos = 50
let votosNulos = 30
let votosValidos = 920

if (votosBrancos + votosNulos + votosValidos <= totalEleitores) {
  let percentualBrancos = (votosBrancos / totalEleitores) * 100
  let percentualNulos = (votosNulos / totalEleitores) * 100
  let percentualValidos = (votosValidos / totalEleitores) * 100

  console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`)
  console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`)
  console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`)
} else {
  console.log("A soma dos votos não pode ser maior que o número total de eleitores.")
}

// Activity 18
let precoTabela = 500 
let numeroParcelas = 2
let precoFinal
let valorParcela

if (numeroParcelas === 1) {
  precoFinal = precoTabela * 0.975 
} else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
  precoFinal = precoTabela 
} else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
  precoFinal = precoTabela * 1.06 
} else if (numeroParcelas >= 11 && numeroParcelas <= 15) {
  precoFinal = precoTabela * 1.13 
} else {
  console.log("Número de parcelas inválido")
  precoFinal = 0
}

valorParcela = precoFinal / numeroParcelas

console.log("Preço total da compra: R$", precoFinal.toFixed(2))
console.log("Valor de cada parcela: R$", valorParcela.toFixed(2))
