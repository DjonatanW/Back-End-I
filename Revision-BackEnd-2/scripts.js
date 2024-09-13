
const produtos = []
function criarProduto() {
  let id
  do {
    id = parseInt(prompt('Digite o id do produto'))
    if (isNaN(id) || produtos.find(p => p.id === id)) {
      alert('Identificador incorreto ou já está cadastrado')
    }
  } while(isNaN(id) || produtos.find(p => p.id === id)) {}

  let productName
  do {
    productName = prompt('Digite o nome do produto')
    if (!productName || productName.trim() === '') {
      alert('Insira um nome de produto válido')
    }
  } while(!productName || productName.trim() === '')

  let productValue
  do {
    productValue = parseFloat(prompt('Digite o preço do produto'))
    if (isNaN(productValue) || (productValue < 20.00)) {
      alert('Insira um preço de produto válido')
    }
  }while(isNaN(productValue) || (productValue < 20.00))

  let stockQuantity
  do {
    stockQuantity = parseInt(prompt('Digite a quantidade em estoque do produto'))
    if (isNaN(stockQuantity) || (stockQuantity < 10) || (stockQuantity % 2 != 0)) {
      alert('Insira uma quantidade de produto válida para o estoque')
    }
  } while(isNaN(stockQuantity) || (stockQuantity < 10) || (stockQuantity % 2 != 0))

  produtos.push({
    id,
    productName,
    productValue,
    stockQuantity
  })
}

function lerProdutos() {
  produtos.forEach((produto, index) => {
    console.log(`${index +1}. ID:${produto.id}, Nome:${produto.productName}, Preço:${produto.productValue}, Qtd. Estoque:${produto.stockQuantity}`)
  })
}

function atualizarProduto(id, newproductName, newValue, newQuantity) {
  const produto = produtos.find(p => p.id === id)
  
  if (!produto) {
    console.log('Produto não encontrado') 
    return
  }

  if (!newproductName || newproductName.trim() === '') {
    alert('Nome de produto inválido') 
  } else { 
    produto.productName = newproductName
  }

  if (isNaN(newValue) || (newValue < 20.00)) {
    alert('Preço de produto inválido') 
  } else {
    produto.productValue = newValue
  }
    
  (isNaN(newQuantity) || (newQuantity < 10) || (newQuantity % 2 != 0)) ? 
    alert('Quantidade de produto inválida para o estoque') : produto.stockQuantity = newQuantity

  console.log("Produto atualizado com sucesso:", produto)
}

function deletarProduto(id) {
  const indice = produtos.findIndex(p => p.id === id)

  if (indice === -1) {
    console.log("Produto não encontrado")
    return
  }

  const produtoRemovido = produtos.splice(indice,1)

  console.log('Produto removido com sucesso: ', produtoRemovido)
  
}

let continuar = true
while (continuar) {
  criarProduto()
  lerProdutos()
  continuar = confirm('Deseja cadastrar mais produtos?')
}
atualizarProduto(1, 'panela', 20.50,20)
lerProdutos()
deletarProduto(3)
lerProdutos()


