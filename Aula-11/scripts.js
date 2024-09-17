const sayHello = function() {
  console.log('Hello!')  
}
//Somente pode ser chamado depois 
sayHello()


sayHelloDeclaration()
function sayHelloDeclaration() {
  console.log('Hello!!!');
  
}

function sum(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
  
  return a + b
}
console.log(sum(2, 5));

const somar = (num1, num2) => {
  return num1 + num2
}

console.log(somar(6, 8));

const soma = (a, b) => a + b
console.log(soma(0,1));

const multiply = num => num * num
console.log(multiply(3));

const sayHelloName = name => `Hello ${name}`
console.log(sayHelloName('Djonatan'));

const welcome = () => 'Seja bem-vindo'
console.log(welcome());

const ages = [15, 22, 18, 27, 14]

const filterAges = ages.filter(age => age >= 18)

console.log(filterAges);


const arrayInteiros = [1, 3, 5, 8, 10, 15]

const filterIndex = arrayInteiros.findIndex(number => number % 2 == 0)
console.log(filterIndex);

arrayInteiros.forEach(number => console.log(number * 2))

const exists10 = arrayInteiros.find(number => number === 10)
console.log(exists10);

console.log(arrayInteiros);

const removedPoor = arrayInteiros.splice(1,2, 12, 8)
console.log(arrayInteiros);


console.log(arrayInteiros);
const updatedInteiros = [...arrayInteiros]
console.log(updatedInteiros);
const removedPoor2 = updatedInteiros.splice(1,2, 40, 8)
console.log(arrayInteiros);
console.log(updatedInteiros);

const temperatures = [25, 30, 22, 15, 18]

const hasHotTemperature = temperatures.some(temp =>temp > 28)
console.log(hasHotTemperature);

const numbers = [1, 2, 3, 4, 5]

const squareNumbers = numbers.map(number => Math.pow(number, 2))
console.log(squareNumbers);

const numberss = [40, 50, 3, 41, 5]
const orderedNumbers = numberss.sort()
console.log(orderedNumbers);

const names = ['Alice', 'Débora', 'Maria', 'David']

const orderedNames = names.sort()
console.log(orderedNames);

const numbers3 = [40, 1, 5, 200, 10]
numbers3.sort((a, b) => b - a)
console.log(numbers3);
numbers3.sort((a, b) => a - b)
console.log(numbers3);

const employee = [
  {name: 'Carla', salary: 2000},
  {name: 'José', salary: 1000},
  {name: 'Mariana', salary: 1500}
]

employee.sort((a, b) => b.salary - a.salary)
console.table(employee);

const numbers1 = [1, 2, 3, 4 , 5]
console.log(numbers1.includes(4))
console.log(numbers1.includes(6))

const sum1 = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue, 15)

console.log(sum1);


const sqareNumber = numbers1.reduce((acc, currentValue) => {
  acc.push(currentValue * currentValue)
  return acc
},[])

console.log(sqareNumber);

const elements = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']

const grouped = elements.reduce((acc, currentValue) => {
  if (!acc[currentValue]) {
    acc[currentValue] = []
  }
  acc[currentValue].push(currentValue)
  return acc
}, {})

console.log(grouped)