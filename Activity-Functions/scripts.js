// Activity 1
function calcularMediaTipo(nota1, nota2, nota3, letra) {
  switch (letra) {
    case 'A':
      return (nota1 + nota2 + nota3) / 3
    case 'P':
      return (nota1 * 5 + nota2 * 3 + nota3 * 2) / (5 + 3 + 2)
    default:
      return 0
  }
}
console.log(calcularMediaTipo(7,8,6,'P'))

// Activity 2
function validarImpar(valorImpar) {
  if (valorImpar % 2 != 0) {
    return true
  } else {
    return false
  }
}

console.log(validarImpar(1))

// Activity 3
function validarNumeroPrimo(valorPrimo) {
  if (valorPrimo < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(valorPrimo); i++) {
    if (valorPrimo % i === 0) {
      return false
    }
  }
  return true
}
console.log(validarNumeroPrimo(7))
console.log(validarNumeroPrimo(10))

// Activity 4
function converterSegundoHoras(valorSegundos) {
  const valorHoras = Math.floor(valorSegundos / 3600) 
  valorSegundos %= 3600
  const valorMinutos = Math.floor(valorSegundos / 60)
  valorSegundos %= 60
  return `${valorHoras}:${valorMinutos}:${valorSegundos}`
}
console.log(converterSegundoHoras(3672));

// Activity 5
function validarNumeroPerfeito(numeroPerfeito) {
  if (numeroPerfeito <= 1) {
    return false
  }

  let somaPerfeitos = 0
  for (i = 1; i <= Math.floor(numeroPerfeito / 2); i++) {
    if (numeroPerfeito % i === 0) {
      somaPerfeitos += i
    }
  }
  return somaPerfeitos === numeroPerfeito
}

console.log(validarNumeroPerfeito(2));

// Activity 6
function acessoAoSite() {
  alert('Bem vindo ao site')
}
acessoAoSite()

// Activity 7
function mostrarMensagem() {
  const aplicacao = 'Página Inicial'
  console.log(`Acesso à aplicação ${aplicacao}`);
  alert(`Bem vindo à aplicação ${aplicacao}`);
}
mostrarMensagem()

// Activity 8
function mostrarDobro(num) {
  alert(`O dobro do número ${num} é ${num * 2}`)
}
mostrarDobro(5)

//Activity 9
function calcularMedia(nota1, nota2, nota3, nome) {
  alert(`${nome}, sua media é ${((nota1 + nota2 + nota3) / 3)}`)
  console.log(`Nota 1:${nota1},Nota 2:${nota2},Nota 3:${nota3}`)
}

calcularMedia(60,70,80, 'João')