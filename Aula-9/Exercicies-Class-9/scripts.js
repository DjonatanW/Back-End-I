// Exercie 1
const tamanhoPizza = prompt('Digite o tamanho da pizza P (pequena), M (média), G (Grande).').toUpperCase()
const refrigerante = prompt('Deseja refrigerante S (sim) N (não).').toUpperCase()

switch (tamanhoPizza) {
  case 'P':
    console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 20 + 5 : 20)}`)
    break
  case 'M':
    console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 30 + 5 : 30)}`)
    break
  case 'G':
    console.log(`O valor do pedido é de R$${(refrigerante ==='S' ? 40 + 5 : 40)}`)
    break
  default:
    console.log('Opção inválida, tente novamente.')
}

// Exercicie 2 
