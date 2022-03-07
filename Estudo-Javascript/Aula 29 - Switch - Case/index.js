const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
} else if(diaSemana === 6){
    diaSemanaTexto = 'Sábado';
}
console.log(diaSemanaTexto);

// o switch é para checar vários valores na mesma variável
const data1 = new Date('1943-12-08 09:35:48');
let semanaDia = data1.getDay();
let textoSemana;

switch (semanaDia){
    case 0:
        textoSemana = 'Domingo';
        break;
    case 1:
        textoSemana = 'Segunda';
        break;
    case 2:
        textoSemana = 'Terça';
        break;
    case 3:
        textoSemana = 'Quarta';
        break;
    case 4:
        textoSemana = 'Quinta';
        break;
    case 5:
        textoSemana = 'Sexta';
        break;
    case 6:
        textoSemana = 'Sábado';
        break;
    default:
        textoSemana = 'Inexistente';
        break;
}
console.log(textoSemana);
// nunca esquecer de colocar um break quando for criar um novo 'case', pois caso você esqueça pode ocasionar erros no seu código
// caso eu remova o 'case' da primeira condição o programa irá ler o 'case 0' e o 'case 1' juntos e caso o dia correto seja domingo ele vai mostra segunda, pois falta um break pra dizer que o 'case 0' acaba

// você pode elminar os 'break' colocando o Switch dentro de uma função
const data2 = new Date('1562-06-16 15:35:49');
const diaSem = data.getDay();
const textoDiaSem = getDiaSemanaTexto(diaSem);
function getDiaSemanaTexto (diaSem){
    let textoDiaSem;
    switch (diaSem){
        case 0:
            textoDiaSem = 'Domingo';
            return textoDiaSem;
        case 1:
            textoDiaSem = 'Segunda';
            return textoDiaSem;
        case 2:
            textoDiaSem = 'Terça';
            return textoDiaSem;
        case 3:
            textoDiaSem = 'Quarta';
            return textoDiaSem;
        case 4:
            textoDiaSem = 'Quinta';
            return textoDiaSem;
        case 5:
            textoDiaSem = 'Sexta';
            return textoDiaSem;
        case 6:
            textoDiaSem = 'Sábado';
            return textoDiaSem;
        default:
            textoDiaSem = 'Inexistente';
            return textoDiaSem;
            
    }
}
console.log(textoDiaSem);
// eliminando os 'break' você precisa colocar 'return' pra indicar que aquela condição termina
// colocando o switch em uma função você pode usar ela em qualuqer lugar do código apenas usando o nome da função neste caso (getDiaSemanaTexto) em qualquer lugar do código sem precisar digitar tudo de novo