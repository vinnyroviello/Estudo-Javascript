var nome = 'Vinícius';
var nome = 'Freitas';

console.log(nome);
// com var você pode redeclarar uma variável sem problema

let nome = 'Vinícius';
let nome = 'Freitas';

console.log(nome);
// com let você não pode redeclarar uma variável, isso acasionar um erro em seu programa

nome = 'Vinícius';
console.log(nome);
// NUNCA FAZER ISSO, ISSO CRIA UMA VARIÁVEL GLOBAL NO SISTEMA GERAL E ISSO PODE AFETAR OUTRAS VARIÁVEIS DO SEU SISTEMA
// SEMPRE CRIAR UM VARIÁVEL COM var, let OU const. NUNCA SEM UMA DELAS.
// COM let VOCÊ NÃO CONSEGUE DECLARAR E REDECLARAR UMA VARIÁVEL, E COM var VOCÊ CONSEGUE DECLARAR E REDECLARAR UMA VARIÁVEL.