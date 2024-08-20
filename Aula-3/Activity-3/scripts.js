let mesDoAno = Number(prompt('Digite um número do mês do ano.'));
let nomeDoMesAno;

switch (mesDoAno) {
  case 1:
    nomeDoMesAno = "Janeiro";
    break;
  case 2:
    nomeDoMesAno = "Fevereiro";
    break;
  case 3:
    nomeDoMesAno = "Março";
    break;
  case 4:
    nomeDoMesAno = "Abril";
    break;
  case 5:
    nomeDoMesAno = "Maio";
    break;
  case 6:
    nomeDoMesAno = "Junho";
    break;
  case 7:
    nomeDoMesAno = "Julho";
    break;
  case 8:
    nomeDoMesAno = "Agosto";
    break;
  case 9:
    nomeDoMesAno = "Setembro";
    break;
  case 10:
    nomeDoMesAno = "Outubro";
    break;
  case 11:
    nomeDoMesAno = "Novembro";
    break;
  case 12:
    nomeDoMesAno = "Dezembro";
    break;

  default:
    nomeDoMesAno = "Mês inválido";
    break;
}
document.write(nomeDoMesAno);
