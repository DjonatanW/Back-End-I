/*
// Activity 1 
let idade = 0;
let somaIdades = 0;
let contadorAlunos = 0;

while (idade != 999) {
  do {
    idade = parseInt(prompt("Digite a idade do aluno"));
    if (isNaN(idade) || idade <= 0) {
      alert("Idade digita inválida. Favor informar a idade novamente");
    }
  } while (isNaN(idade) || idade <= 0);
  {
  }
  if (idade != 999) {
    somaIdades += idade;
    contadorAlunos++;
  }
}
document.write(`Na turma existe ${contadorAlunos} alunos e a média de idade é ${(somaIdades/contadorAlunos).toFixed(2)}`)
*/
//Activity 2

let salario = 0.00
let sexo 
let somaSalariosHomens = 0.00
let somaSalariosMulheres = 0.00
let continuar

while(true){
  do {
    salario = parseInt(prompt('Informe o sálario'))
    if (isNaN(salario) || salario <= 0.00) {
      alert('Salário informado inválido. Favor informe outro salário.')
    }
  } while (isNaN(salario) || salario <= 0.00) {
  }

  do {
    sexo = prompt('Informe qual é o sexo M/F')
    if (sexo.toUpperCase() != 'M' && sexo.toUpperCase != 'F') {
      alert('Sexo informado inválido. Favor informe M ou F')
    }
  } while (sexo.toUpperCase() != 'M' && sexo.toUpperCase() != 'F') {
  }

  if (sexo.toUpperCase() === 'M') {
    somaSalariosHomens += salario
  } else if (sexo.toUpperCase() === 'F') {
    somaSalariosMulheres += salario
  } else {
    alert('Aconteceu algo de errado. Tente novamente.')
  }

  do{
    continuar = confirm("Você quer continuar?")
    if (continuar.toUpperCase() === "NÃO" || continuar.toUpperCase() === "NAO") {
      break
    }
  } while (continuar.toUpperCase() != "SIM") {

  }
  

}