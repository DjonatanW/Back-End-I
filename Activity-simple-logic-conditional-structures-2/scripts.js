// 1 Activity
let grausCelsius
do {
  grausCelsius = parseInt(prompt('Digite uma temperatura em graus Celsius.'));
} while (isNaN(grausCelsius)) {  
}
let grausFahrenheit = (grausCelsius * 9) / 5 + 32;
document.write(`${grausCelsius} °C são ${grausFahrenheit} °F <br>`);

// 2 Activity
let diaDaSemana = 0

while (diaDaSemana < 1 || diaDaSemana > 7 || isNaN(diaDaSemana)) {
   diaDaSemana = parseInt(prompt('Digite o número do dia da semana.'))
}
let nomeDoDia

switch (diaDaSemana) {
  case 1:
    nomeDoDia = 'Domingo';
    break;
  case 2:
    nomeDoDia = 'Segunda'; 
    break;
  case 3:
    nomeDoDia = 'Terça';
    break;
  case 4:
    nomeDoDia = 'Quarta';
    break;
  case 5:
    nomeDoDia = 'Quinta'; 
    break;
  case 6:
    nomeDoDia = 'Sexta';
    break;
  case 7:
    nomeDoDia = 'Sábado';
    break;
  default:
    nomeDoDia = 'Dia inválido';
    break

}
document.write(`Dia da semana é ${nomeDoDia} <br>`)

// 3 Activity
let tipoNumero;
do {
  tipoNumero = parseInt(prompt('Digite um número.'));
} while (isNaN(tipoNumero));
{
}
if (tipoNumero > 0) {
  document.write(`Número é positivo. <br>`);
} else if (tipoNumero == 0) {
  document.write(`Número é zero. <br>`);
} else {
    document.write(`Número é negativo. <br>`);
}

// 4 Activity
let custoCarroFabrica
do {
  custoCarroFabrica = parseFloat(prompt('Digite um número.'));
} while (isNaN(custoCarroFabrica) || custoCarroFabrica <= 0.00);
{
}
const percentualDistribuidora = 28
const percentualImpostos = 45
let valorCarro = (custoCarroFabrica * (percentualDistribuidora + percentualImpostos) / 100) + custoCarroFabrica
document.write(`O preço final do carro é R$${valorCarro.toFixed(2)}. <br>`);

// 5 Activity
let altura;
do {
  altura = parseFloat(prompt('Digite sua altura em metros.'));
} while (isNaN(altura) || altura <= 0.0);
{
}

let peso;
do {
  peso = parseFloat(prompt('Digite seu peso em kilos.'));
} while (isNaN(peso) || peso <= 0.0);
{
}

const resultadoImc = peso / (altura * altura);
if (resultadoImc < 18.5) {
  document.write('Você está abaixo da faixa de peso ideal <br>');
} else if (resultadoImc > 24.99) {
  document.write('Você está acima da faixa de peso ideal <br>');
} else if (resultadoImc >= 18.5 || resultadoImc <= 24.99) {
  document.write('Você está dentro da faixa de peso ideal <br>')
} else {
  document.write('Nõa se classifica nas faixas do IMC <br>')
}

// 6 Activity
let primeiroValor;
do {
  primeiroValor = parseFloat(prompt('Digite um número.'));
} while (isNaN(primeiroValor) || primeiroValor <= 0.0);
{
}
let segundoValor;
do {
  segundoValor = parseFloat(prompt('Digite um número.'));
} while (isNaN(segundoValor) || segundoValor <= 0.0);
{
}
let operator;
let validoOperador = false;

while (!validoOperador) {
  operator = prompt('Insira um operador (+, -, *, /):');

  if (operator == '+' || operator == '-' ||
      operator == '*' || operator == '/') {
    validoOperador = true;
  } else {
    alert('Operador inválido. Tente novamente!');
  }
}
let resultadoOperador;
switch (operator) {
  case "+":
    resultadoOperador = primeiroValor + segundoValor;
    break
  case "-":
    resultadoOperador = primeiroValor - segundoValor;
    break
  case "*":
    resultadoOperador = primeiroValor * segundoValor;
    break
  case "/":
    resultadoOperador = primeiroValor / segundoValor;
    break
  case "%":
    resultadoOperador = primeiroValor % segundoValor;
    break
  default:
     alert('Operador inválido');
}
document.write(`Resultado é ${resultadoOperador} <br>`)

// 7 Activity

let saldoConta = 100.0;
let valorRetirada;
const valorTaxa = 4.5;
do {
  valorRetirada = parseFloat(prompt("Digite o valor para retirada"));
  if (isNaN(valorRetirada)) {
    alert('Precisa ser digitado somente números.')
  } else if (valorRetirada + valorTaxa > saldoConta) {
    alert(`Saldo insuficiente para o saque. Saldo disponível de ${saldoConta - valorTaxa}`);
  }else if (valorRetirada <= 0.0) {
    alert('Precisa ser digitado um valor positivo')
  } else if (valorRetirada % 5 != 0) {
    alert("Somente pode fazer saques múltiplo de 5");
  }

} while (
  isNaN(valorRetirada) ||
  valorRetirada <= 0.0 ||
  valorRetirada % 5 != 0 ||
  valorRetirada + valorTaxa > saldoConta
);
{
}
saldoConta -= valorRetirada + valorTaxa;

document.write(`O seu saldo em conta é de R$${saldoConta.toFixed(2)} <br>`);

// 8 Activity

let idadeAtleta
let pesoAtleta

do {
  idadeAtleta = parseInt(prompt('Digite sua idade.'));
} while (isNaN(idadeAtleta) || idadeAtleta <= 0);
{
}

do {
  pesoAtleta = parseFloat(prompt('Digite seu peso.'));
} while (isNaN(pesoAtleta) || pesoAtleta <= 0.0);
{
}

if (idadeAtleta <= 12) {
  document.write('Infantil <br>')
} else if (idadeAtleta >= 13 && idadeAtleta <= 16) {
  if (pesoAtleta <= 40.00) {
    document.write('Juvenil leve <br>')
  } else {
    document.write('Juvenil pesado <br>')
  }
} else if (idadeAtleta >= 17 && idadeAtleta <= 24) {
  if (pesoAtleta <= 45.00) {
    document.write('Sênior leve <br>')
  } else if ( pesoAtleta > 45.00 && pesoAtleta <= 60.00) {
    document.write('Sênior médio <br>')
  } else {
    document.write('Sênior pesado <br>')
  }
} else if (idadeAtleta > 24) {
  document.write('Veterano <br>')
}

// 9 Activity
let velocidade
do {
  velocidade = parseInt(prompt('Digite a velocidade do veículo.'));
} while (isNaN(velocidade) || velocidade <= 0.0);
{
}

if (velocidade > 80) {
  document.write(`O valor da multa será de R$${((velocidade-80)*5).toFixed(2)} <br>`)
}