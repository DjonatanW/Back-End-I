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
  
 for (let i = 0; i <= 10; i++) {
  console.log(i)
 }
  
let count = 0;
for (;;) {
  console.log(count);
  count++;

  if (count >= 5) {
    break;
  }
}
// Desenvolva um programa que peça ao usuário para inserir um número inteiro positivo n. Em seguida, calcule a média dos números de 1 até n. Exiba a média no final.

// let numero = parseInt(prompt('Digite um numero inteiro:'));
// let soma = 0;

// for (let i =1; i<= numero; i++){
//   soma +=i
// }
// console.log(soma/numero)

// Crie um programa que solicita ao usuário inserir um número inteiro positivo. Em seguida, use um loop for para exibir todos os números pares de 1 até o número inserido e, em seguida, todos os números ímpares de 1 até o número inserido.

// let numero2 = Number(prompt('Escolha um número inteiro positivo: '))

// for (i = 0; i <= numero2; i++) {
//     if (i % 2 === 0) {
//         document.write('Numero Par!' + i + '<br>')
//     } else {
//         document.write('Numero Impar!' + i + '<br>')
//     }
// }


// Peça ao usuário para inserir um número inteiro positivo n. Em seguida, calcule e exiba o fatorial desse número. O fatorial de um número n é o produto de todos os inteiros positivos de 1 até n.

// let numero = parseInt(prompt('Digite um numero inteiro:'));
// let fatorial = 1
// for (let i = numero; i >= 1; i--) {
//   fatorial *= i
// }
// console.log(`O fatorial de ${numero} é ${fatorial}`)


console.log(Number.isInteger(5.6))
console.log(Number.isInteger(7))
*/