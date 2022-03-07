// faça a variável varA receber o valor da variável varB. 
// a variável varB receber o valor da variável varC. 
// e a variável varC receber o valor da variável varA.
let varA = 'A';
let varB = 'B';
let varC = 'C';

let letraA = varA;
let letraB = varB;
let letraC = varC;
varA = letraB;
varB = letraC;
varC = letraA;
console.log(varA, varB, varC);
// esse é o jeito mais usado para resolver esse problema :)

let varA1 = 'A';
let varB1 = 'B';
let varC1 = 'C';
[varA1, varB1, varC1] = [varB1, varC1, varA1];
console.log(varA1, varB1, varC1);
// esse é um jeito mais moderno, pois você não precisa criar uma variável para salvar o resultado anterior
// nesse modo você apenas iverte os resultados de forma mais eficaz