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
document.write(`Na turma existe ${contadorAlunos} alunos e a média de idade é ${somaIdades}`)
