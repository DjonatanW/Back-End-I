let nota1 = parseFloat(prompt('Informe a primeira nota.'))
let nota2 = parseFloat(prompt('Informe a segunda nota.'))
let nota3 = parseFloat(prompt('Informe a terceira nota.'))
let media = (nota1 + nota2 + nota3) / 3

if (media >= 9 && media <=10) {
  document.write(`<strong>Aprovado com nota exelente</strong>`)
} else if (media >= 7 && media < 9) {
  document.write(`<mark>Aprovado com uma nota boa</mark>`)
} else if (media < 7) {
    let recuperacao = parseFloat(prompt('Informe a nota de recuperação.'))
    if (recuperacao >= 6) {
      document.write('Aprovado na recuperação')  
  } else {
    document.write('Reprovado, estude e pratique mais.')  
  } 
} else {
  document.write('Alguma Nota(s) informadas são inválida(s).')  
}