/*const numeroAleatorio = Math.round(Math.random() * 10 + 1); // round Arredonda para o mais perto
const numeroAleatorio2 = Math.floor(Math.random() * 10 + 1); //floor aredonda para baixo
let tentativas = 0;

while (true) {
  const palpite = parseInt(prompt("ADivinhe o número entre 1 e 10."));

  tentativas++;

  if (palpite == numeroAleatorio) {
    alert("Parabéns! Você acertou em " + tentativas + " tentativas");
    break;
  } else {
    alert("Tente novamente.");
  }
}
tentativas = 0;
let acertou = false;
while (!acertou) {
  const palpite = parseInt(prompt("ADivinhe o número entre 1 e 10."));

  tentativas++;

  if (palpite == numeroAleatorio2) {
    alert("Parabéns! Você acertou em " + tentativas + " tentativas");
    acertou = true;
  } else {
    alert("Tente novamente.");
  }
}
console.log(numeroAleatorio);
console.log(numeroAleatorio2);

let numero

do {
  numero = parseInt(prompt('Digite um número maior que 10.'))

} while(numero <= 10)
  alert(`Você digitou um número válido: ${numero}`)
  */
 for (let i = 0; i <= 10; i++) {
  console.log(i)
 }