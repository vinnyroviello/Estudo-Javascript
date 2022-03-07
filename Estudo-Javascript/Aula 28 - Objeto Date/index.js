const data = new Date(); // sempre que você for usar um função construtora tem que começar com new e a função construtora sempre vai começar com a letra MAIÚSCULA
console.log(data.toString());
// eu pedi pra que me mostrasse a hora atual
// deixando o new Date(); em branco ele sempre vai mostrar a data atual

const passado = new Date(1992, 5, 6, 6, 35, 55, 865);
console.log(passado.toString());
// aqui eu pedi que mostrasse um data do passado 06/06/1992 ás 06:35 horas da manhã
// os meses em Javascript funcionam igual arrays então Janeiro [0], Favereiro [1], Março [2], Abriu [3]... e assim por diante
// e para pedir uma data [Ano, Mês, Dia, Hora, Minuto, Segundo, Milésimo de segundo]

const calendario = new Date('2017-08-26 16:39:51');
console.log(calendario.toString());
// também podemos colocar a data em String seguindo a mesma ordem [Ano, Mês, Dia, Hora, Minuto, Segundo, Milésimo de segundo]
// tanto pode se usar o espaço para separar a data da hora quanto usar um T ('2017-08-26T16:39:51')

const dataSe = new Date();
console.log('Dia', dataSe.getDate());
console.log('Mês', dataSe.getMonth() + 1);
console.log('Ano', dataSe.getFullYear());
console.log('Hora', dataSe.getHours());
console.log('Min', dataSe.getMinutes());
console.log('Seg', dataSe.getSeconds());
console.log('ms', dataSe.getMilliseconds());
console.log('Dia da Semana', dataSe.getDay());
console.log(dataSe.toString());
// aqui foi separado cada valor da data de hoje
// no mês foi acrescentado + 1 para que mostre o mês em seu número 'real' pois como no Javascript os meses começam no [0] nesse caso que HOJE estamos em Abriu apareceria 'Mês 3' e não 4
// os dias da semana funcionam como os meses também começam do [0], então [0] é Domingo e [6] é Sábado

console.log(Date.now());
// o dia de hoje é 1617733244739
// aqui eu pedi que me mostrasse os miléssimos de segundo da data de hoje, a pratir do marco zero 01/01/1970 Timestmap Unix (Época Unix)
// então se eu colocar esses miléssimos de segundos no 'new Date(1617733244739);' o programa irá me mostrar a data do momento exato que eu pedi os miléssimos de segundos 'Tue Apr 06 2021 15:20:44'
const dataMile = new Date(1617733244739);
console.log(dataMile.toString());

function zero (num){ // isso foi criado para colocar um 0 antes de qualquer número que for menos que 10, só por estética
    return num >= 10 ? num : `0${num}`;
}
function formataData (data1) {
    const dia = zero(data1.getDate());
    const mes = zero(data1.getMonth() + 1);
    const ano = zero(data1.getFullYear());
    const hora = zero(data1.getHours());
    const min = zero(data1.getMinutes());
    const seg = zero(data1.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);
// eru fiz com que ele me formatasse a data de hoje do jeito que eu queria