const cars = []
let id
let modelCar
let markCar
let yearCar
let colorCar
let priceCar

let newCarDefault = {
  id: cars.length + 1,
  modelCar: 'Prisma',
  markCar: 'Chevrolet',
  yearCar: 2008,
  colorCar: 'Vermelho',
  priceCar: 230000.00  
}
cars.push(newCarDefault)

let newCarDefault2 = {
  id: cars.length + 1,
  modelCar: 'Uno',
  markCar: 'Fiat',
  yearCar: 2012,
  colorCar: 'Branco',
  priceCar: 30000.00
}
cars.push(newCarDefault2)

newCarDefault = {
  id: cars.length + 1,
  modelCar: 'Onix',
  markCar: 'Chevrolet',
  yearCar: 2020,
  colorCar: 'Vermelho',
  priceCar: 100000.00  
}
cars.push(newCarDefault)

function createCars() {
  id = cars.length + 1
  modelCar = prompt('Digite o modelo do carro.')
  markCar = prompt('Digite a marca do carro.')
  yearCar = Number(prompt('Digite o ano do carro.'))
  colorCar = prompt('Digite a cor do carro.')
  priceCar = parseFloat(prompt('Digite qual o preço do carro.'))

  if (!modelCar || modelCar === null || modelCar === '') {
    alert('Passe um modelo válido')
    return
  } else if (!markCar|| markCar === null || markCar === '') {
    alert('Passe a marca do carro válida')
    return
  } else if (!yearCar || yearCar === null || yearCar === '') {
    alert('Passe um ano válido')
    return
  } else if (!colorCar || colorCar === null || colorCar === '') {
    alert('Passe uma cor válida')
    return
  } else if (!priceCar || priceCar === null || priceCar === '') {
    alert('Passe um preço válido')
    return
  } else {
    let newCar = {
      id: id,
      modelCar: modelCar,
      markCar: markCar,
      yearCar: yearCar,
      colorCar: colorCar,
      priceCar: priceCar  
    }
    cars.push(newCar)
    console.log('Carro cadastrado com sucesso!') 
  }
}

function printerCars() {
  cars.sort((a, b) => a.priceCar - b.priceCar).forEach((car) => console.log(`ID:${car.id} | Modelo:${car.modelCar} | Marca:${car.markCar} | Ano:${car.yearCar} | Cor:${car.colorCar} | Preço:${car.priceCar.toLocaleString('pt-BR', { minimumFractionDigits: 2 , maximumFractionDigits: 2})}`))
}

function filterMarkCars() {
  const markCarFilter = prompt('Digite a marca de carro que deseja buscar')
  const filterAndSortedCars = 
    cars.filter(car => markCarFilter === car.markCar)
    .sort((a, b) => a.priceCar - b.priceCar)
  
  filterAndSortedCars.forEach((car) => {
    console.log(`ID: ${car.id} | Modelo: ${car.modelCar} | Marca: ${car.markCar} | Ano: ${car.yearCar} | Cor: ${car.colorCar} | Preço: R$ ${car.priceCar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
  })
}

function updateCar() {
  let idUpdate = Number(prompt('Digite o identificador do carro desejado'))
  if (!idUpdate) {
    alert('Digite um id válido')
  }
  const positionCar = cars.findIndex(car => car.id === idUpdate) 
  if (positionCar === -1){
    console.log("Veículo, não encontrado.")
    return
  }  
  let newColor = prompt('Digite a nova cor do carro.')
  let newPrice = parseFloat(prompt('Digite qual o novo preço do carro.'))
  if (!newColor || newColor === null || newColor === '') {
    alert('Passe uma nova cor válida')
    return
  } else if (!newPrice || newPrice === null || newPrice === '') {
    alert('Passe um novo preço válido')
    return
  } else {
    const carPosition = cars[positionCar]
    carPosition.colorCar = newColor
    carPosition.priceCar = newPrice
    printerCars()   
  }
  
}

function removeCars() {
  let idUpdate = Number(prompt('Digite o identificador do carro desejado'))
  if (!idUpdate) {
    alert('Digite um id válido')
  }
  const positionCar = cars.findIndex(car => car.id === idUpdate) 
  if (positionCar === -1){
    console.log("Veículo, não encontrado.")
    return
  }   

  cars.splice(positionCar, 1)
  printerCars()   

}

let opcao = 1
while (opcao != 0) {
  opcao = parseInt(prompt(
    `Change one option:
     1 - Create cars
     2 - List cars
     3 - Filter cars
     4 - Update cars
     5 - Remove cars
     0 - Exit`
  ))
  
  switch (opcao) {
    case 1:
      createCars()
      break
    case 2:
      printerCars()
      break
    case 3:
      filterMarkCars()
      break
    case 4:
      updateCar()
      break
    case 5:
      removeCars()
      break
    case 0:
      console.log('Até breve')
      break
    default:
      alert('Opção inválida')
  }
}

