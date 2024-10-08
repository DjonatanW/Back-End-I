// Exercie 1
const tamanhoPizza = prompt('Digite o tamanho da pizza P (pequena), M (média), G (Grande).').toUpperCase()
const refrigerante = prompt('Deseja refrigerante S (sim) N (não).').toUpperCase()

switch (tamanhoPizza) {
  case 'P':
    console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 20 + 5 : 20).toFixed(2)}`)
    break
  case 'M':
    console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 30 + 5 : 30).toFixed(2)}`)
    break
  case 'G':
    console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 40 + 5 : 40).toFixed(2)}`)
    break
  default:
    console.log('Opção inválida, tente novamente.')
}

if (tamanhoPizza === 'P') {
  console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 20 + 5 : 20).toFixed(2)}`)
}if (tamanhoPizza === 'M') {
  console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 30 + 5 : 30).toFixed(2)}`)
}if (tamanhoPizza ===  'G') {
  console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 40 + 5 : 40).toFixed(2)}`)
} else {
  console.log('Opção inválida, tente novamente.')
}

// Exercicie 2 
let valided = true
const id = parseInt(prompt('Digite o id do produto'))
if (isNaN(id)) {
  document.write('Identificador não encontrado, passe um número válido<br>')
  valided = false
}

const productName = prompt('Digite o nome do produto')
if (!productName || productName.trim() === '') {
  document.write('Insira um nome de produto válido<br>')
  valided = false
}

let productValue = parseFloat(prompt('Digite o preço do produto'))
if (isNaN(productValue) || (productValue < 20.00)) {
  document.write('Insira um preço de produto válido<br>')
  valided = false
}

let stockQuantity = parseInt(prompt('Digite a quantidade em estoque do produto'))
if (isNaN(stockQuantity) || (stockQuantity < 10) || (stockQuantity % 2 != 0)) {
  document.write('Insira uma quantidade de produto válida para o estoque<br>')
  valided = false
}

if (productValue % 2 === 0 && valided) {
  document.write(`O produto ${productName} foi cadastrado com sucesso! Produto adicionado na nossa lista de promoções especiais<br>`)
}


let customerTime
do {
  customerTime = parseInt(prompt('Digite quantos anos é cliente.'))
} while (isNaN(customerTime) || customerTime < 0)
continuar = true
while(continuar) {
  const id = parseInt(prompt('Digite o id do produto'))
  if (isNaN(id)) {
    alert('Identificador não encontrado, passe um número válido')
  }

  const productName = prompt('Digite o nome do produto')
  if (!productName || productName.trim() === '') {
    alert('Insira um nome de produto válido')
  }

  let productValue = parseFloat(prompt('Digite o preço do produto'))
  if (isNaN(productValue) || (productValue < 20.00)) {
    alert('Insira um preço de produto válido')
  }

  let stockQuantity = parseInt(prompt('Digite a quantidade em estoque do produto'))
  if (isNaN(stockQuantity) || (stockQuantity < 10) || (stockQuantity % 2 != 0)) {
    alert('Insira uma quantidade de produto válida para o estoque')
  }
  continuar = confirm('Deseja continuar cadastrando?')
}
alert('Você finalizou os cadastros')

if (customerTime > 3) {
  alert('Você tem 30% de desconto nos nossos produtos')
} else if (customerTime > 2) {
  alert('Você tem 20% de desconto nos nossos produtos')
} else if (customerTime > 1) {
  alert('Você tem 10% de desconto nos nossos produtos')
}