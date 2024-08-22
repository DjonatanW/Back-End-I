let numero = 0;
/*while (numero < 1) {
  numero = parseInt(prompt("Digite um número qualquer."));
}
let auxiliar = 0;
let stringOutuput = "";

while (auxiliar != numero) {
  auxiliar++;
  stringOutuput += " " + auxiliar;
}
console.log(`${stringOutuput} Acabou!`);
*/
do {
  numero = parseInt(prompt("Digite um número qualquer."));
}while (isNaN(numero) || numero <= 0) {
  
}

auxiliar = 0;
stringOutuput = "";
do {
  auxiliar++;
  stringOutuput += " " + auxiliar;
} while (auxiliar != numero) {
}

console.log(`${stringOutuput} Acabou!`);
