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
while ((valorRetirada % coin50 == 0|| valorRetirada % coin50 != 0) && valorRetirada >= coin50) {
  valorRetirada -= coin50
  quantidade50 ++
}

let quantidade10 = 0 
while ((valorRetirada % coin10 == 0|| valorRetirada % coin10 != 0)  && valorRetirada >= coin10) {
  valorRetirada -= coin10
  quantidade10 ++
}

let quantidade5 = 0 
while ((valorRetirada % coin5 == 0|| valorRetirada % coin5 != 0)  && valorRetirada >= coin5) {
  valorRetirada -= coin5
  quantidade5 ++
}

let quantidade1 = 0 
while ((valorRetirada % coin1 == 0|| valorRetirada % coin1 != 0)  && valorRetirada >= coin1) {
  valorRetirada -= coin1
  quantidade1 ++
}

document.write(`GC$ 50,00 -> ${quantidade50}<br>`)
document.write(`GC$ 10,00 -> ${quantidade10}<br>`)
document.write(`GC$ 5,00 -> ${quantidade5}<br>`)
document.write(`GC$ 1,00 -> ${quantidade1}<br>`)