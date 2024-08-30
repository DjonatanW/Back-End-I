// operadores aritiméticos
/*
let valor1 = 0;
let valor2 = 0;
let valor3 = 0;
do {
  valor1 = parseFloat(prompt("Digite o primeiro número"));
  if (isNaN(valor1)) {
    alert("Valor informado inválido. Digite um número novamente.");
  }
} while (isNaN(valor1));

do {
  valor2 = parseFloat(prompt("Digite o segundo número"));
  if (isNaN(valor2)) {
    alert("Valor informado inválido. Digite um número novamente.");
  }
} while (isNaN(valor2));

do {
  valor3 = parseFloat(prompt("Digite o terceiro número"));
  if (isNaN(valor3)) {
    alert("Valor informado inválido. Digite um número novamente.");
  }
} while (isNaN(valor3));

let somaPrimeiroSegundo = valor1 + valor2
console.log(`A soma do primeiro e segundo valor é ${somaPrimeiroSegundo}`)

let somaSegundoTerceiro = valor2 + valor3
console.log(`A soma do segundo e terceiro valor é ${somaSegundoTerceiro}`)

let somaPrimeiroTerceiro = valor1 + valor3
console.log(`A soma do primeiro e terceiro valor é ${somaPrimeiroTerceiro}`)

let subtracaoPrimeiroSegundo = valor1 - valor2
console.log(`A subtração do primeiro e segundo valor é ${subtracaoPrimeiroSegundo}`)

let subtracaoSegundoTerceiro = valor2 - valor3
console.log(`A subtração do segundo e terceiro valor é ${subtracaoSegundoTerceiro}`)

let subtracaoPrimeiroTerceiro = valor1 - valor3
console.log(`A subtração do primeiro e terceiro valor é ${subtracaoPrimeiroTerceiro}`)

let multiplicacaoPrimeiroSegundo = valor1 * valor2
console.log(`A multiplicação do primeiro e segundo valor é ${multiplicacaoPrimeiroSegundo}`)

let multiplicacaoSegundoTerceiro = valor2 * valor3
console.log(`A multiplicação do segundo e terceiro valor é ${multiplicacaoSegundoTerceiro}`)

let multiplicacaoPrimeiroTerceiro = valor1 * valor3
console.log(`A multiplicação do primeiro e terceiro valor é ${multiplicacaoPrimeiroTerceiro}`)

let restoPrimeiroSegundo = valor1 % valor2
console.log(`A resto do primeiro e segundo valor é ${restoPrimeiroSegundo}`)

let restoSegundoTerceiro = valor2 % valor3
console.log(`A resto do segundo e terceiro valor é ${restoSegundoTerceiro}`)

let restoPrimeiroTerceiro = valor1 % valor3
console.log(`A resto do primeiro e terceiro valor é ${restoPrimeiroTerceiro}`)

let potenciaPrimeiroSegundo = valor1 ** valor2
console.log(`A potência do primeiro e segundo valor é ${potenciaPrimeiroSegundo}`)

let potenciaSegundoTerceiro = valor2 ** valor3
console.log(`A potência do segundo e terceiro valor é ${potenciaSegundoTerceiro}`)

let potenciaPrimeiroTerceiro = valor1 ** valor3
console.log(`A potência do primeiro e terceiro valor é ${potenciaPrimeiroTerceiro}`)


// Operadores Lógicos
let arrayLogico = [true, false, true]

console.log(`${arrayLogico[0]} e ${arrayLogico[1]} é ${arrayLogico[0] && arrayLogico[1]}`)
console.log(`${arrayLogico[1]} e ${arrayLogico[2]} é ${arrayLogico[1] && arrayLogico[2]}`)
console.log(`${arrayLogico[0]} e ${arrayLogico[2]} é ${arrayLogico[0] && arrayLogico[2]}`)

let arrayLogicoInvertido = [!true, !false, !true]
console.log(`${arrayLogicoInvertido[0]} e ${arrayLogicoInvertido[1]} é ${arrayLogicoInvertido[0] && arrayLogicoInvertido[1]}`)
console.log(`${arrayLogicoInvertido[1]} e ${arrayLogicoInvertido[2]} é ${arrayLogicoInvertido[1] && arrayLogicoInvertido[2]}`)
console.log(`${arrayLogicoInvertido[0]} e ${arrayLogicoInvertido[2]} é ${arrayLogicoInvertido[0] && arrayLogicoInvertido[2]}`)

//Operadores Atribuição

let saldoConta = 1000.00
let valorDeposito = 0 
let porcentagemRetirada = 0
do {
  valorDeposito = parseFloat(prompt("Digite o valor para depósito"));
  if (isNaN(valorDeposito) || valorDeposito <= 0) {
    alert("Valor informado inválido. Digite um número novamente.");
  }
} while (isNaN(valorDeposito) || valorDeposito <= 0);

saldoConta += valorDeposito

console.log(`Saldo da conta é R$${saldoConta.toFixed(2)}`)

do {
  porcentagemRetirada = parseFloat(prompt("Digite a porcentagem para retirada."));
  if (isNaN(porcentagemRetirada) || porcentagemRetirada <= 0 || porcentagemRetirada > 100) {
    alert("Porcentagem informada inválido. Digite a porcentagem novamente.");
  }
} while (isNaN(porcentagemRetirada) || porcentagemRetirada <= 0 || porcentagemRetirada > 100);

saldoConta = (saldoConta * porcentagemRetirada) / 100
console.log(`Saldo em conta de R$${saldoConta.toFixed(2)}`)

/*
// Comparadores

let numeroComparador = parseInt(prompt("Digite um número"));

let ehPar = numeroComparador % 2 === 0;
console.log(`O número ${numeroComparador} é par: ${ehPar}`); 

let ehImpar = numeroComparador % 2 !== 0;
console.log(`O número ${numeroComparador} é ímpar: ${ehImpar}`); 

let maiorQueDez = numeroComparador > 10;
console.log(`O número ${numeroComparador} é maior que 10: ${maiorQueDez}`); 

let maiorOuIgualDez = numeroComparador >= 10;
console.log(`O número ${numeroComparador} é maior ou igual a 10: ${maiorOuIgualDez}`); 

let menorQueDez = numeroComparador < 10;
console.log(`O número ${numeroComparador} é menor que 10: ${menorQueDez}`);

let menorOuIgualDez = numeroComparador <= 10;
console.log(`O número ${numeroComparador} é menor ou igual a 10: ${menorOuIgualDez}`);

// Condicionais if/else/ Switch Case

//Exercicio 1
let rendaMensal = 0 

do {
  rendaMensal = parseFloat(prompt("Digite qual a sua renda mensal"));
  if (isNaN(rendaMensal) || rendaMensal <= 0) {
    alert("Renda mensal informado inválido. Digite uma renda mensal novamente.");
  }
} while (isNaN(rendaMensal) || rendaMensal <= 0)

let restricaoDeCredito = confirm('Houve restrição de crédito ')
if(rendaMensal >= 2000 && !restricaoDeCredito) {
  console.log('Cliente elegível sem restrições.')
} else if(rendaMensal >= 2000 && restricaoDeCredito) {
  console.log('Cliente elegível, mas com restrições devido ao histórico de crédito.')
} else if(rendaMensal < 2000 && !restricaoDeCredito) {
  console.log('Cliente não é elegível devido à renda insuficiente.')
} else if(rendaMensal < 2000 && restricaoDeCredito) {
  console.log('Cliente não é elegível devido à renda insuficiente e ao histórico de crédito.')
} else {
  console.log('Cliente não se classificou em nenhuma das opções.')
}  

*/
//Exercicio 2
let formaGeometrica
do {
  formaGeometrica = prompt("Digite uma forma geométrica (quadrado, triângulo ou retângulo)");
  if (formaGeometrica !== 'quadrado' && formaGeometrica !== 'triângulo' && formaGeometrica !== 'retângulo') {
    alert("Forma digitada inválida. Favor informe uma forma geométrica (quadrado, triângulo ou retângulo)");
  }
} while (formaGeometrica !== 'quadrado' && formaGeometrica !== 'triângulo' && formaGeometrica !== 'retângulo')
 
let lado = 0
let base = 0
let altura = 0 
switch (formaGeometrica) {
  case 'quadrado':
    do {
      lado = parseInt(prompt("Digite qual é o lado do quadrado"));
      if (isNaN(lado) || lado <= 0) {
        alert("Lado do quadrado informado inválido.");
      }
    } while (isNaN(lado) || lado <= 0) {
      console.log(`A área do quadrado é ${lado * lado}`)
    }
    break

  case 'triângulo':
    do {
      altura = parseInt(prompt("Digite qual é o altura do triângulo"));
      if (isNaN(altura) || altura <= 0) {
        alert("Altura do triângulo informado inválido.");
      }
    } while (isNaN(altura) || altura <= 0)

    do {
      base = parseInt(prompt("Digite qual é o base do triângulo"));
      if (isNaN(base) || base <= 0) {
        alert("Base do triângulo informado inválido.");
      }
    } while (isNaN(base) || base <= 0) 
    console.log(`A área do triângulo é ${(base * altura)/2}`)  
    break

  case 'retângulo':
    do {
      altura = parseInt(prompt("Digite qual é o altura do retângulo"));
      if (isNaN(altura) || altura <= 0) {
        alert("Altura do retângulo informado inválido.");
      }
    } while (isNaN(altura) || altura <= 0)
    do {
      base = parseInt(prompt("Digite qual é o base do retângulo"));
      if (isNaN(base) || base <= 0) {
        alert("Base do retângulo informado inválido.");
      }
    } while (isNaN(base) || base <= 0) 
    console.log(`A área do retângulo é ${(base * altura)}`)  
    break
}
