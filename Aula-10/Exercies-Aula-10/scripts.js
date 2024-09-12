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
