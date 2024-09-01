// Activity 1 
let idade = 0;
let somaIdades = 0;
let contadorAlunos = 0;

while (idade != 999) {
  do {
    idade = parseInt(prompt("Digite a idade do aluno"));
    if (isNaN(idade) || idade <= 0) {
      alert("Idade digita inválida. Favor informar a idade novamente");
    }
  } while (isNaN(idade) || idade <= 0);
  {
  }
  if (idade != 999) {
    somaIdades += idade;
    contadorAlunos++;
  }
}
document.write(`Na turma existe ${contadorAlunos} alunos e a média de idade é ${(somaIdades/contadorAlunos).toFixed(2)}.<br>`)

//Activity 2
let salario = 0.00
let sexo 
let somaSalariosHomens = 0.00
let somaSalariosMulheres = 0.00
let continuar = true

while(continuar){
  do {
    salario = parseInt(prompt('Informe o sálario'))
    if (isNaN(salario) || salario <= 0.00) {
      alert('Salário informado inválido. Favor informe outro salário.')
    }
  } while (isNaN(salario) || salario <= 0.00) {
  }

  do {
    sexo = prompt('Informe qual é o sexo M/F').toUpperCase()
    if (sexo !== 'M' && sexo !== 'F') {
      alert('Sexo informado inválido. Favor informe M ou F')
    }
  } while (sexo !== 'M' && sexo !== 'F') {

  }

  if (sexo === 'M') {
    somaSalariosHomens += salario
  } else if (sexo === 'F') {
    somaSalariosMulheres += salario
  } else {
    alert('Aconteceu algo de errado. Tente novamente.')
  }
  continuar = confirm("Você quer continuar?")
  if (!continuar) {
    break
  }
}
document.write(`Foram pagos aos homens R$${somaSalariosHomens.toFixed(2)}<br>`)
document.write(`Foram pagos as mulheres R$${somaSalariosMulheres.toFixed(2)}<br>`)

//Activity 3
let primeiroValor = 0
let ultimoValor = 0
let valorIncremento = 0

do {
  primeiroValor = parseInt(prompt('Digite o primeiro valor.'))
  if (isNaN(primeiroValor)) {
    alert('O primeiro valor informado inválido. Favor digite outro primeiro valor.')
  }
} while (isNaN(primeiroValor)) {
}

do {
  ultimoValor = parseInt(prompt('Digite o último valor.'))
  if (isNaN(ultimoValor) || ultimoValor <= primeiroValor) {
    alert('O último valor informado inválido. Favor digite outro último valor.')
  }
} while (isNaN(ultimoValor) || ultimoValor <= primeiroValor) {
}

do {
  valorIncremento = parseInt(prompt('Digite o incremento.'))
  if (isNaN(valorIncremento) || ultimoValor - primeiroValor < valorIncremento) {
    alert('O incremento informado inválido. Favor digite outro incremento.')
  }
} while (isNaN(valorIncremento) || ultimoValor - primeiroValor < valorIncremento) {
}

let contagemIncremental = 'Contagem: '

for(i = primeiroValor; i <= ultimoValor; i += valorIncremento) {
  contagemIncremental += i + ' ' 
}

contagemIncremental += 'Acabou!'
document.write(`${contagemIncremental}.<br>`)

//Activity 4

let nomeCliente
let sexoCliente
let valorComprasCliente = 0
let valorFinalCliente = 0 
let continuarDigitarCompras = true

do {
  nomeCliente = prompt('Informe o nome do cliente')
  if (nomeCliente == null || nomeCliente === '') {
    alert('Nome informado inválido. Favor informe outro nome.')
  }
} while (nomeCliente == null || nomeCliente === '') {
}

do {
  sexoCliente = prompt('Informe qual é o sexo M/F').toUpperCase()
  if (sexoCliente !== 'M' && sexoCliente !== 'F') {
    alert('Sexo informado inválido. Favor informe M ou F')
  }
} while (sexoCliente !== 'M' && sexoCliente !== 'F') {
}

while(continuarDigitarCompras) {
  do {
    valorComprasCliente = parseFloat(prompt('Informe o valor da compra do cliente'))
    if (isNaN(valorComprasCliente) || valorComprasCliente <= 0.00) {
      alert('O valor da compra do cliente informado inválido. Favor informe outro valor da compra.')
    }
  } while (isNaN(valorComprasCliente) || valorComprasCliente <= 0.00) {
  }
  valorFinalCliente += valorComprasCliente
  continuarDigitarCompras = confirm(`Deseja digitar mais valores de compras do cliente ${nomeCliente}`)
  if (!continuarDigitarCompras) {
    break
  }
}
switch(sexoCliente) {
  case 'M':
    document.write(`Valor a ser recebido é R$${(valorFinalCliente *= 0.95).toFixed(2)}<br>`)
    break

  case 'F':
    document.write(`Valor a ser recebido é R$${(valorFinalCliente *= 0.87).toFixed(2)}<br>`)
    break

  default:
    break
}

//Activity 5
let distanciaViagem = 0 
do {
  distanciaViagem = parseInt(prompt('Informe a distância do percurso em Km'))
  if (isNaN(distanciaViagem) || distanciaViagem <= 0.00) {
    alert('A distância informada inválida. Favor informe outra distância.')
  }
} while (isNaN(distanciaViagem) || distanciaViagem <= 0.00) {
}

if (distanciaViagem <= 200) {
  document.write(`O valor da passagem é R$${(distanciaViagem *= 0.5).toFixed(2)}<br>`)
} else {
  document.write(`O valor da passagem é R$${(distanciaViagem *= 0.45).toFixed(2)}<br>`)
}

//Activity 6
let larguraTerreno = 0
let comprimentoTerreno = 0
do {
  larguraTerreno = parseFloat(prompt("Digite a largura do terreno em metros"));
  if (isNaN(larguraTerreno) || larguraTerreno <= 0) {
    alert("A largura do terreno digita inválida. Favor informar a largura do terreno novamente");
  }
} while (isNaN(larguraTerreno) || larguraTerreno <= 0) {
}

do {
  comprimentoTerreno = parseFloat(prompt("Digite a comprimento do terreno em metros"));
  if (isNaN(comprimentoTerreno) || comprimentoTerreno <= 0) {
    alert("A comprimento do terreno digita inválida. Favor informar a comprimento do terreno novamente");
  }
} while (isNaN(comprimentoTerreno) || comprimentoTerreno <= 0) {
}
let areaTerreno = larguraTerreno * comprimentoTerreno
if (areaTerreno < 100) {
  document.write(`TERRENO POPULAR<br>`)
} else if (areaTerreno >= 100 && areaTerreno <= 500) {
  document.write(`TERRENO MASTER<br>`)
} else if (areaTerreno > 500) {
  document.write(`TERRENO VIP<br>`)
} else {
  document.write(`TERRENO NÃO CLASSIFICADO<br>`)
}