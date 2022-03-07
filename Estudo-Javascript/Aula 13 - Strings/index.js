// string
let umaString = "Oi, \"tudo bem?\"";
console.log(umaString);
// caso você comece um string com aspas duplas ou simples e precise colocar essas mesmas aspas no seu "texto" você pode usar uma \ (barra invertida) para escapar o caractere que vai funcionar
// não é muito bonito de escrever o código desse jeito, e nem muito aconselhável fazer assim

let umaString1 = "Oi, \tudo bem?";
console.log(umaString1);
// caso você presice colocar uma \ (barra invertida) no seu texto você terá que colocar duas, pois só com uma ela vai automaticamente "eliminar" o próximo caractere a sua frente
// dá pra reparar que o 't' depois da \ (barra invertida) está com a mesma cor da \ (barra invertida)

let umaString2 = "Oi, \\tudo bem?";
console.log(umaString2);
// esse sim seria o jeito correto de fazer uma \ (barra invertida) aparecer na sua string

// strings são indexadas, quer dizer que cada caractere tem um índice que começa apartir do 0
//                012345678
let umaString3 = "tudo bem?";
console.log(umaString3[3]);
// nesse caso eu estou pedindo para que ele mostre um caractere que está em um posição específica do índice
// aqui ele vai me mostrar o caractere no índice 3 (umaString3[3]); que no caso é a letra 'o'
// se você tentar pedir algum caractere que não exista no índice ele vai te retornar undefined

//                012345678
let umaString4 = "tudo bem?";
console.log(umaString4.charAt(8));
// .charAt(8) faz a mesma coisa, ele vai procurar o caractere que você especificou e colocá-lo na tela
// mas quando você especificar uma posição de caractere que não exista, ele não mostrará nada ou invéz de undefined

let umaString5 = "Hoje está";
console.log(umaString5.concat(' um lindo dia!'));
// com (umaString5.concat(' um lindo dia!')); você vai concatenar (um lindo dia) com a string anterior
// mas a segunda parte vai ter que começar com um espaço, pois se não as palavras vão se juntar e ficariam "Hoje estáum lindo dia"
// você também pode usar (umaString5 + ' um lindo dia!'); ou também (o mais correto) -> console.log(`${umaString5} um lindo dia!`);

//                012345678
let umaString6 = "Hoje está";
console.log(umaString6.indexOf('está'));
// aqui você vai procurar onde começa no índice a palavra 'está'

//                012345678
let umaString7 = "Hoje está";
console.log(umaString7.lastIndexOf('está'));
// a diferença do lastIndexOf é que ele vai começar a procurar de traz pra frente
// isso só faz diferença quando você específica de que posição ele vai começar a procurar

//                012345678
let umaString8 = "Hoje está";
console.log(umaString8.replace('está', 'você'));
// replace vai substituir uma palavra por outra

//                012345678
let umaString9 = "Hoje está";
console.log(umaString9.length);
// lenght me mostrará o tamanho dessa string
// lembrando que ele mostra o tamanho e não posição, por isso '012345678' tem um tamanho de 9 caracteres

let umaString10 = "Hoje está";
console.log(umaString10.toUpperCase());
// com toUpperCase você deixará sua string toda em maiúsculo

let umaString11 = "Hoje está";
console.log(umaString11.toLowerCase());
// com toLowerCase você deixará sua string toda em minúsculo

let umaString12 = "Hoje está";
console.log(umaString12.slice(-3));
// aqui ele vai me mostrar as últimas 3 letras da frase

let umaString13 = "Hoje está";
console.log(umaString13.split(''));
// aqui ele vai me mostrar as palavras da minha frase separadas