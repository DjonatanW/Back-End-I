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


