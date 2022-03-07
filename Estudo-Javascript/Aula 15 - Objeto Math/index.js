let num1 = 9.52356;
let num2 = Math.floor(num1);
console.log(num2);
// aqui o resultado foi que o número foi arredondado para baixo

let num3 = 9.52356;
let num4 = Math.ceil(num3);
console.log(num4);
// aqui o resultado foi arredondado pra cima ignorando as casa decimais

let num5 = 9.50;
let num6 = Math.round(num5);
console.log(num6);
// o 'Math.round' arredonda o número para o mais próximo, nesse caso arredondou para baixo pois as casas decimais estão mais proximas do 9, caso fosse 9.50 que está mais próximo de 10 o resultado seria 10
// casas decimais da "metade pra cima" ele arredonda pra cima, e casas decimais da "metade pra baixo" ele arredonda para baixo

let exemplo = 10;

console.log(Math.max(1,3,56,84,67,10,-89,2021,35,75,42,20));
console.log(Math.min(1,3,56,84,67,10,-89,2021,35,75,42,20));
// no Math.max eu pedi que ele me mostrasse qual era o maior número dentre esses que eu coloquei para ele
// Math.min aqui pedi que ele me mostrasse o menor número

let roger = 5;

const aleatorio = Math.random();
console.log(aleatorio);
// Math.random ele me fornece um número aleatório entre 0 e 1, mas nunca mostra o 1.

let tale = 5;

const aleato = Math.random() * (10 -5) + 5;
console.log(aleato);
//  aqui nesse caso eu quero que ele me mostre um número entre 5 e 10

let leta = 5;

const aleao = Math.round (Math.random() * (10 -5) + 5);
console.log(aleao);
// com Math.round antes você retira as casa decimais

let pi = 12;

console.log(Math.PI);
// o valor de PI

let pote = 54;

console.log(Math.pow(2, 10));
// aqui temos potenciação, mas também pode ser feito com console.log(2 ** 10); que daria no mesmo

let raiz = 9;
console.log(raiz ** (1/2));

let quadrada = 9;
console.log(quadrada ** 0.5);
// raiz quadrada