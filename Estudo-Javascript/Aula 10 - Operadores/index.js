// Operadores aritméticos
// + = Adição e Concatenação
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

// caso um dos números ou ambos estejam como texto o sinal de + irá fazer uma concatenção, ou seja ele ira juntar os dois numeros e não soma-los
const num3 = '5';
const num4 = '10';
console.log(num3 + num4);

// - = subtração
const num5 = 48;
const num6 = 25;
console.log(num5 - num6);

// / = divisão
const num7 = 1589;
const num8 = 359;
console.log(num7 / num8);

// * = multiplicação
const num9 = 8;
const num10 = 6;
console.log(num9 * num10);

// ** potenciação (número X elevado a número Y)
const num11 = 2;
const num12 = 10;
console.log(num11 ** num12);

// % resto da divisão
const num13 = 10;
const num14 = 3;
console.log(num13 % num14);

// assim como na matemática os () dão prioridade a qual equação deve ser resolvida primeiro
// prioridade de equações na programação
// primeiro (), segundo **, terceiro *, / e %, quarto + e -
// uma conta que os operadores tenham a mesma precedência a equação irá priorizar da esquerda para a direita
// console.log(num1 / num2 * num4); aqui ele resolveria a divisão primeiro depois a multiplicação (esquerda para direita)

// ++ operador de incremento
let contador = 1;
contador ++;
console.log(contador);
// aqui pedimos que a variável tenha o valor somado com 1
// se ficar repetindo contador ++; ele vai ficar pegando o valor da variável e somando +1 toda vez que repetirmos contador ++;
let contador1 = 1;
contador1 ++; // 2
contador1 ++; // 3 
contador1 ++; // 4
contador1 ++; // 5
console.log(contador1);
// este operador não pode ser usado com uma constante, pois cosntante não pode se mudar o valor depois de declarado
// este operador pode ser usado antes ou depois da variável
let contador2 = 1;
++ contador2;
++ contador2;
++ contador2;
console.log(contador2);

// -- operador de decremento 
let contador3 = 10;
contador3 --; // 9
contador3 --; // 8
console.log(contador3);
// aqui simplesmente ele vai pegar o valor da variável e subitrair 1 a cada repetição de contador3 --;
// os operadores de incremento e de decremento podem ser usados no console.log da seguinte maneira console.log(++ contador3); ou console.log(-- contador3); neste caso os sinais precisam vir antes para que ele possa mostrar o valor somado ou subtraído (NÃO RECOMENDADO!)
// os operadores de incremento e de decramento só fazem a adição de +1 e subtração de -1, nunca mais que isso
// caso precise fazer com outro valor, exemplo:
const passos = 2;
let contador4 = 0;
contador4 = contador4 + passos;
console.log(contador4); // 2
contador4 = contador4 + passos;
console.log(contador4); // 4
contador4 = contador4 + passos;
console.log(contador4); // 6
// aqui ele vai adicionar 2 cada vez que eu pedir contador4 = contador4 + passos;
// ou também um jeito mais fácil e mais "clean"
let contador5 = 1;
contador5 += 2; // 3
contador5 += 2; // 5
contador5 += 2; // 7
console.log(contador5);
// essa maneira pode ser feito com QUALQUER OPERADOR ARITMÉTICO
// eles são chamados de Operadores de Atribuição

// cálculos com "string" ou número de ponto flutuante
const num15 = 10;
const num16 = parseInt('5');
console.log(num15 + num16);
// aqui o número 5 está como uma string pois ele está dentro de '' (aspas), com o parseInt('5'); ele vai ler essa string vai identificar o número 5 e vai transformar ele em um Inteiro e Number
// para números de ponto flutuante é preciso usar outra função
const num17 = 10;
const num18 = parseFloat('5.2');
console.log(num17 + num18);
// é preciso usar o parseFloat pois o parseInt iria transformar o número em inteiro, ou seja iria ignorar o número após o . (ponto) e só usaria o número 5 que vem antes do . (ponto)
// o parseFloat identifica as casas decimais
//há também uma terceira maneira no qual ele identifica tanto números inteiros, quanto números decimais
const num19 = 12;
const num20 = Number('6');
console.log(num19 + num20);
// o Number vai identificar se essa string é um número inteiro ou um decimal, vai transforma-lo em Number e realizar a conta
const num21 = 12;
const num22 = Number('6.8');
console.log(num21 + num22);
// parseInt (inteiros) parseFloat (decimais) Number (ambos)