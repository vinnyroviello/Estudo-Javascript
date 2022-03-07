let num1 = 1;
let num2 = 3.6;

console.log(num1.toString() + num2);
console.log(typeof num1);
// as duas váriaveis são number, mas eu precisava concatenar os dois números e então eu pedi para o programa considerar "num1" uma string para que a concatenação acontecesse
// repara que mesmo assim não foi mudado o tipo da variável ela continua number, só foi "mudada" quando eu pedi
// isso ajuda caso mais pra frente eu precise dessa variável como number

let num3 = 1;

num3 = num3.toString();
console.log(typeof num3);
// aqui sim eu mudei o tipo da variável para string definitivamente

let num4 = 5369;

console.log(num4.toString(2));
// aqui eu pedi que me mostrasse a representação binária do número 5369

let num5 = 53.6945932186669;

console.log(num5.toFixed(2));
// aqui o número foi arredondado pelo toFixed(), e limitado a apenas (2) duas casas decimais

let num6 = 53;

console.log(Number.isInteger(num6));
// (Number.isInteger(num6)) é usado para saber se o número é inteiro ou não, com (True e False)

// contas com valores abaixo de zero podem ter algumas imprecisões quando tivermos casas decimais

let num7 = 0.5;
let num8 = 0.2;

num7 += num8; // 0.7?
num7 += num8; // 0.9?
num7 += num8; // 1.1?
num7 += num8; // 1.3?
num7 += num8; // 1.5?

console.log(num7);
// o resulto está como 1.4999999999999998 o que seria incorreto
// o jeito pra resolver isso seria usando (Number.num9.toFixed(2))

let num9 = 0.5;
let num10 = 0.2;

num9 += num10; // 0.7?
num9 += num10; // 0.9?
num9 += num10; // 1.1?
num9 += num10; // 1.3?
num9 += num10; // 1.5?

num9 = Number(num9.toFixed(2))
console.log(num9);
// parseFloat(num9.toFixed(2)) também resolveria o problema
// o número (2) é para o programa manter o número somente com 2 casas decimais
// caso você queria deixar o resultado como está e apenas mostar para o usuário o valor correto com console.log(num9.toFixed(2)); você já resolve esse problema
// o toFixed() sempre vai arredondar o valor pra cima por isso ele resolve o problema quando você só precisa mostrar para o usuário