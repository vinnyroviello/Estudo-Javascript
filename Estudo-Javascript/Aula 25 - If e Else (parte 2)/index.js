const numero = 36;
if (numero >= 0 && numero <= 50) {
    console.log(`${numero} é um número entre 0 e 50`);
} else {
    console.log(`${numero} não é um número entre 0 e 50`);
}

// if (se) (numero >= 0 && numero <= 50) ocorrer, então faça { console.log(`${numero} é um número entre 0 e 50`); }
// else (se não) se não faça isso { console.log(`${numero} não é um número entre 0 e 50`); }

const poder = 12054;
if (poder <= 8999){
    console.log(`O poder de luta dele é de ${poder}`);
} else {
    console.log(`IT'S OVER 9000!`);
}

// desculpa tive que fazer isso :D

const posicao = 2;
if (posicao >= 1 && posicao <= 3){
    console.log('Sua posição está entre 1 e 3');
} else if (posicao >= 4 && posicao <= 6){
    console.log('Sua posição está entre 4 e 6');
} else if (posicao >= 7 && posicao <= 9){
    console.log('Sua posição está entre 7 e 9');
} else if (posicao >= 10 && posicao <= 12){
    console.log('Sua posição está entre 10 e 12');
} else {
    console.log('Você não está em nenhuma posição');
}

// o Javascript vai checar as condições e a partir do momento que ele encrontar um condição verdadeira ele executa o que precisa e para de procurar
// por isso mesmo que ele tenha outra condição verdadeira após ele encontrar uma condição que também é verdadeira ele não executará essa segunda condição verdadeira
// para que o programa execute mais do que uma condição verdadeira você precisa separa-las em vários 'if' diferentes

const dinheiro = 40;
if (dinheiro >= 50){
    console.log(`Eu tenho ${dinheiro} reais.`);
} else {
    console.log(`Eu só tenho ${dinheiro} reais.`);
}

if (dinheiro >= 50){
    console.log(`Vamos sair?`);
} else {
    console.log('Não podemos sair!');
}