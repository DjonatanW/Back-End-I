// 1 Activity
let quantidadePessoas = 0 
let maiorAltura = 0 
let menorAltura = 9999 
while (quantidadePessoas < 15) {
  let altura = parseFloat(prompt('Digite a altura da pessoa'))
  if (altura > maiorAltura) {
    maiorAltura = altura
  }
  if (altura < menorAltura) {
    menorAltura = altura
  }
  quantidadePessoas ++
}
document.write(`A menor altura do grupo é ${menorAltura}<br>`)
document.write(`A maior altura do grupo é ${maiorAltura}<br>`)

// 2 Activity

let alturaPedro = 150
const crescerPedro = 2
let alturaLucas = 110
const crescerLucas = 3

let ano = 0

while (alturaPedro >= alturaLucas) {
  ano ++
  alturaPedro += crescerPedro
  alturaLucas += crescerLucas
  
}
document.write(`Para ambos ter a mesma idade são necessário ${ano} anos.<br>`)
document.write(`Para Lucas ter a maior idade em relação a Pedro são necessário ${ano + 1} anos.<br>`)

// 3 Activity
do {
  multiplicador = parseInt(prompt('Digite um número multiplicador.'));
} while (isNaN(multiplicador) || multiplicador <= 0);
{
}

do {
  iteracao = parseInt(prompt('Digite a quantidade de iteração.'));
} while (isNaN(iteracao) || iteracao <= 0);
{
}

for (let i = 1; i <= iteracao; i++) {
  document.write(`${i} * ${multiplicador} = ${i * multiplicador}<br>`)
}

// 4 Activity
let multiplos5 = '5'
let multiplos3 = '3'

for (let i = 6; i <= 250; i++) {
  if (i % 3 == 0) {
    multiplos3 += ', '+ i 
  }
  if (i % 5 == 0) {
    multiplos5 +=  ', ' + i
  }
}

document.write(`Os multiplos de 3 são: ${multiplos3}<br>`)
document.write(`Os multiplos de 5 são: ${multiplos5}<br>`)

// 5 Activity
let numeroInteiro
do {
  numeroInteiro = parseInt(prompt('Digite um número inteiro positivo.'));
} while (isNaN(numeroInteiro) || numeroInteiro <= 0);
{
}

let resultadoContagem = '0'
for ( let i = 1; i <= numeroInteiro; i++) {
  resultadoContagem += `, ${i}`
}
document.write(`Contagem: ${resultadoContagem} FIM!`)

// 6 Activity
let output = '';

for (let i = 30; i >= 1; i--) {
    let isPrime = true;

    if (i <= 1) {
        isPrime = false;
    } else if (i == 2) {
        isPrime = true;
    } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        output += `[${i}] `;
    } else {
        output += `${i} `;
    }
}

document.write(output);

// 7 Activity 
const totalNumeros = 10;
let soma = 0;
let positivos = 0;
let negativos = 0;

for (let i = 1; i <= totalNumeros; i++) {
    let numero = parseInt(prompt(`Digite o número ${i}:`))
    
    soma += numero

    if (numero > 0) {
        positivos++
    } else if (numero < 0) {
        negativos++
    }
}

let media = soma / totalNumeros
let percentualPositivos = (positivos / totalNumeros) * 100
let percentualNegativos = (negativos / totalNumeros) * 100

document.write(`Média aritmética: ${media}<br>`)
document.write(`Quantidade de valores positivos: ${positivos}<br>`)
document.write(`Quantidade de valores negativos: ${negativos}<br>`)
document.write(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%<br>`)
document.write(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%<br>`)