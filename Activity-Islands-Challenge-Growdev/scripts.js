const coin50 = 50
const coin10 = 10
const coin5 = 5
const coin1 = 1

let valorRetirada = 0 
do {
  valorRetirada = parseInt(prompt('Digite o valor de retirada'))
} while (isNaN(valorRetirada) || valorRetirada <= 0)  {

}

let quantidade50 = 0 
while ((valorRetirada % 50 == 0|| valorRetirada % 50 != 0) && valorRetirada >= 50) {
  valorRetirada -= 50
  quantidade50 ++
}

let quantidade10 = 0 
while ((valorRetirada % 10 == 0|| valorRetirada % 10 != 0)  && valorRetirada >= 10) {
  valorRetirada -= 10
  quantidade10 ++
}

let quantidade5 = 0 
while ((valorRetirada % 5 == 0|| valorRetirada % 5 != 0)  && valorRetirada >= 5) {
  valorRetirada -= 5
  quantidade5 ++
}

let quantidade1 = 0 
while ((valorRetirada % 1 == 0|| valorRetirada % 1 != 0)  && valorRetirada >= 1) {
  valorRetirada -= 1
  quantidade1 ++
}

document.write(`GC$ 50,00 -> ${quantidade50}<br>`)
document.write(`GC$ 10,00 -> ${quantidade10}<br>`)
document.write(`GC$ 5,00 -> ${quantidade5}<br>`)
document.write(`GC$ 1,00 -> ${quantidade1}<br>`)