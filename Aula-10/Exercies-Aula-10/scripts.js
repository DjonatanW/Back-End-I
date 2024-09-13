const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(listArray)

const newlistArray = listArray.map(function(valor) {
  return valor * 2 
})
console.log(newlistArray)
console.log(newlistArray.filter(valor => valor >= 12))
newlistArray.push(1)
console.log(newlistArray)
console.log(newlistArray.findIndex(valor => valor % 2 != 0))

const promocoesEspeciais = []

promocoesEspeciais.push({
  id: 356,
  productName: 'wwrgvrg',
  productValue: 30,
  stockQuantity:220
})

promocoesEspeciais.push({
  id: 3,
  productName: 'wrg',
  productValue: 20,
  stockQuantity:220
})
promocoesEspeciais.push({
  id: 321,
  productName: 'wrgsfbgv',
  productValue: 200,
  stockQuantity:220
})
console.log(promocoesEspeciais);
console.log(promocoesEspeciais.filter(objeto => objeto.id === 3))

const objetoPosicao = promocoesEspeciais.filter(objeto => objeto.id === 3)
for (const posicao in promocoesEspeciais) {
  if (promocoesEspeciais[posicao].id === 3) {
    promocoesEspeciais[posicao].productName = 'Teste'
  }
}
console.log(promocoesEspeciais)
promocoesEspeciais.splice(promocoesEspeciais.findIndex(objeto => objeto.id === 3), 1)
console.log("Produto deletado com sucesso !")
console.log(promocoesEspeciais)


//livro
const livros = []

function adicionarLivro() {
  const titulo = prompt('Digite o titulo do livro')
  const autor = prompt('Digite o nome do autor')
  livros.push({ titulo, autor })
  console.log('Livro adicionado à lista de livros')
}

function listarLivros() {
  livros.forEach((livro, indice) => {
    console.log(`${indice}. Título:${livro.titulo}, Autor:${livro.autor}`)
  })
}

function atualizarLivro(indice, titulo, autor) {
  if (indice >= 0 && indice < livros.length) {
    livros[indice].titulo = titulo
    livros[indice].autor = autor
    console.log(`Livro atualizado: ${livros[indice].titulo} , ${livros[indice].autor}`)
  } else {
    console.log(`Erro: Livro não encontrado`)
  }
}

function excluirLivro(indice) {
  if (indice >= 0 && indice < livros.length) {
    livros.splice(indice,1)
    console.log(`Livro Excluido`)
  } else {
    console.log(`Erro: Livro não encontrado`)
  }
}

function encerrarPrograma() {
  console.log('Programa encerrado') 
}

let opcao = 0
while(opcao != 5) {
  opcao = parseInt(prompt(
  `Escolha uma opção:
   1 - Adicionar livro
   2 - Listar livros
   3 - Atualizar livro
   4 - Excluir livro
   5 - Sair`))
  switch (opcao) {
    case 1:
      adicionarLivro()
      break
    case 2:
      listarLivros()
      break
    case 3:
      const posicao = parseInt(prompt('Digite a posição que o livro se encontra'))
      const titulo = prompt('Digite o titulo do livro')
      const autor = prompt('Digite o nome do autor')
      atualizarLivro(posicao, titulo, autor)
      break
    case 4:
      const indice = parseInt(prompt('Digite a posição que o livro se encontra para excluir'))
      excluirLivro(indice)
      break
    case 5:
      encerrarPrograma()
      break
    default:
      alert('Opção inválida')
      break
  }
}