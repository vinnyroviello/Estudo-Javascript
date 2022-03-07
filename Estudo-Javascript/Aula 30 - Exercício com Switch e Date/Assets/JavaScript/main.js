const h1 = document.querySelector(".container h1"); // aqui eu chamei minha 'documento html' e o meu container
const data = new Date(); // aqui eu pedi a data de hoje

function getDiaSemanaTexto(diaSemana) {
  // aqui eu trouxe a minha função que converte o dia da semana de 'Número' pra 'Texto'
  let textoDiaSem;
  switch (diaSemana) {
    case 0:
      textoDiaSem = "domingo";
      return textoDiaSem;
    case 1:
      textoDiaSem = "segunda-feira";
      return textoDiaSem;
    case 2:
      textoDiaSem = "terça-feira";
      return textoDiaSem;
    case 3:
      textoDiaSem = "quarta-feira";
      return textoDiaSem;
    case 4:
      textoDiaSem = "quinta-feira";
      return textoDiaSem;
    case 5:
      textoDiaSem = "sexta-feira";
      return textoDiaSem;
    case 6:
      textoDiaSem = "sábado";
      return textoDiaSem;
    default:
      textoDiaSem = "inexistente";
      return textoDiaSem;
  }
}
function getNomeMes(numeroMes) { 
  // aqui outra função pra converter o 'Número' do mês em 'Nome' do mês
  let nomeMes;
  switch (numeroMes) {
    case 0:
      nomeMes = "janeiro";
      return nomeMes;
    case 1:
      nomeMes = "fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "março";
      return nomeMes;
    case 3:
      nomeMes = "abril";
      return nomeMes;
    case 4:
      nomeMes = "maio";
      return nomeMes;
    case 5:
      nomeMes = "junho";
      return nomeMes;
    case 6:
      nomeMes = "julho";
      return nomeMes;
    case 7:
      nomeMes = "agosto";
      return nomeMes;
    case 8:
      nomeMes = "setembro";
      return nomeMes;
    case 9:
      nomeMes = "outubro";
      return nomeMes;
    case 10:
      nomeMes = "novembro";
      return nomeMes;
    case 11:
      nomeMes = "dezembro";
      return nomeMes;
  }
}
function zero(num) {
  // isso foi criado para colocar um 0 antes de qualquer número que for menos que 10, só por estética
  return num >= 10 ? num : `0${num}`;
}
function criaData(data) {
  // esse data foi da variável que eu criei lá em cima pra me gerar o dia de hoje
  const diaSemana = data.getDay(); // aqui estou pegando o número do dia da semana
  const numeroMes = data.getMonth(); // aqui estou pegando o número do Mês

  const nomeDia = getDiaSemanaTexto(diaSemana); // aqui eu coloco o o número do dia da semana e converto ele com a minha função 'getDiaSemanaTexto', convertendo no nome do dia da semana
  const nomeMes = getNomeMes(numeroMes); // aqui eu coloco o número do mês e converto ele com a função 'getNomeMes', convertendo para o nome do mês
  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ${data.getHours()}:${zero(data.getMinutes())}`; // e aqui eu mando ele retornar tudo na minha página HTML
}

h1.innerHTML = criaData(data); // aqui eu 'substituo' o está na meu h1 do HTML pra o que está no meu Javascript

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//outro jeito de fazer muito mais simples

const h1 = document.querySelector('.container h1'); //aqui eu chamei minha 'documento html' e o meu container
const data = new Date(); // aqui eu pedi a data de hoje

h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: "full", timeStyle: 'short'}); // aqui eu mandei pro HTML uma 'sting' da data em português do Brasil como o dia da semana, dia do mês, mês, ano, e a hora sem os segundos

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// mais uma maneira de resolver, dessa vez removendo os switch's e usando o índice do array

const h1 = document.querySelector(".container h1"); // aqui eu chamei minha 'documento html' e o meu container
const data = new Date(); // aqui eu pedi a data de hoje

function getDiaSemanaTexto(diaSemana) {
  // aqui eu trouxe a minha função que converte o dia da semana de 'Número' pra 'Texto'
  const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']; // como o array segue o padrão de sequência [0][1][2][3]... e assim por diante ficar mais simples de fazer, sem precisar direcionar cada dia da semana a um 'número'
  return diasSemana[diaSemana];
}
function getNomeMes(numeroMes) { 
  // aqui outra função pra converter o 'Número' do mês em 'Nome' do mês
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']; // como o array segue o padrão de sequência [0][1][2][3]... e assim por diante ficar mais simples de fazer, sem precisar direcionar cada mês a um 'número'
  return meses[numeroMes];
}
function zero(num) {
  // isso foi criado para colocar um 0 antes de qualquer número que for menos que 10, só por estética
  return num >= 10 ? num : `0${num}`;
}
function criaData(data) {
  // esse data foi da variável que eu criei lá em cima pra me gerar o dia de hoje
  const diaSemana = data.getDay(); // aqui estou pegando o número do dia da semana
  const numeroMes = data.getMonth(); // aqui estou pegando o número do Mês

  const nomeDia = getDiaSemanaTexto(diaSemana); // aqui eu coloco o o número do dia da semana e converto ele com a minha função 'getDiaSemanaTexto', convertendo no nome do dia da semana
  const nomeMes = getNomeMes(numeroMes); // aqui eu coloco o número do mês e converto ele com a função 'getNomeMes', convertendo para o nome do mês
  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} - ${data.getHours()}:${zero(data.getMinutes())}`; // e aqui eu mando ele retornar tudo na minha página HTML
}

h1.innerHTML = criaData(data); // aqui eu substituo o está na meu h1 do HTML pra o que está no meu Javascript

// COMENTE OS MODOS PARA PODE VERIFICAR SE O QUE VOCê QUER VER ESTÁ FUNCIONANDO :)