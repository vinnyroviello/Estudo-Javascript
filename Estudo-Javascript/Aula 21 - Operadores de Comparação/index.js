/* Operadores de Comparação
 > Maior que
 >= Maior que ou Igual a
 < Menor que
 <= Menor que ou Igual a
 == Igualdade (Valor)
 === Igualdade Estrita (Valor e Tipo)
 != Diferente (Valor)
 !== Diferente "Estrito" (Valor e Tipo)
 */

 const num1 = 10;
 const num2 = 10;
 const comp = num1 > num2;
 console.log(comp);
 // operação para identificar se o 'num1' é maior que 'num2'

 const num3 = 15;
 const num4 = 12;
 const comp2 = num3 >= num4;
 console.log(comp2);
 // operação para identidicar se 'num3' é maior ou igual a 'num4'

 const num5 = 45;
 const num6 = 59;
 const comp3 = num5 < num6;
 console.log(comp3);
 // operação para identificar se 'num5' é menor que 'num6'

 const num7 = 45;
 const num8 = 23;
 const comp4 = num7 <= num8;
 console.log(comp4);
 // operação para identificar se 'num7' e menor ou igual a 'num8'

 const num9 = 152;
 const num10 = 456;
 const comp5 = num9 == num10;
 console.log(comp5);
 // operação para identificar se 'num9' é igual a 'num10'
 // nesta operação abaixo não é muito adequado usar o sinal de igualdade para quando um valor for 'number' e outro 'string', pois nesse caso eles ele deduz que o number 659 é igual ao string '659' então ele vai me retornar true mesmo sendo uma "comparação incorreta"
 // isso pode ocasionar algum efeito colateral no código
 const num11 = 659; // numer
 const num12 = '659'; // string
 const comp6 = num11 == num12;
 console.log(comp6);
// usando o sinal de igualdade restrita ele vai me trazer o resultado correto dessa operação
// pois ele vai comparar um 'number' com uma 'string' e vai me retornar 'false'
 const num13 = 522;
 const num14 = '522';
 const comp7 = num13 === num14;
 console.log(comp7);
 // nessa operação ele comprar não só os valores como também os tipos (esse é o correto)

 const num15 = 123;
 const num16 = 124;
 const comp8 = num15 != num16;
 console.log(comp8);
 // operação para identificar se 'num15' é diferente (!=) de 'num16'
 // e assim como na operação de igualdade o jeito correto de se fazer essa é usando (!==)