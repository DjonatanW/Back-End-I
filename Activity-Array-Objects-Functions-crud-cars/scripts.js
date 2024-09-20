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
  priceCar: 23000.00  
}
cars.push(newCarDefault)


function createCars() {
  id = cars.length + 1
  modelCar = prompt('Digite o modelo do carro.')
  markCar = prompt('Digite a marca do carro.')
  yearCar = Number(prompt('Digite o ano do carro.'))
  colorCar = prompt('Digite a cor do carro.')
  priceCar = parseFloat(prompt('Digite qual o preço do carro.')).toFixed(2)

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
  cars.forEac |((car, index) => console.log(`ID:${index} | Modelo:${car.modelCar} | Marca:${car.markCar} | Ano:${car.yearCar} | Cor:${car.colorCar} | Preço:${car.priceCar.toLocaleString('pt-BR', { minimumFractionDigits: 2 , maximumFractionDigits: 2})}`))
}


let opcao = 1
while (opcao != 0) {
  opcao = parseInt(prompt(
    `Change one option:
     1 - Create cars
     2 - List cars
     0 - Exit`
  ))
  
  switch (opcao) {
    case 1:
      createCars()
      break
    case 2:
      printerCars()
      break
    case 0:
      console.log('Até breve')
      break
    default:
      alert('Opção inválida')
  }
}

