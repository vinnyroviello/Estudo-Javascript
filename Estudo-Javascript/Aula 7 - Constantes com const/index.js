// não podemos criar constantes com palavras resevadas
// constantes precisam ter nomes sigficativos, para fácil entendimento
// não podemos começar o nome de uma constante com um número
// o nome das constantes não pode conter espaços ou traços
// as constantes tmabém utilizam camelCase
// as constantes também são Case-sensitive
// não podemos modificar o valor de uma constante, a constante precisa ser criada e inicializada ao mesmo tempo
// NÃO UTILIZAR VAR, SEMPRE UTILIZAR LET

const nome = 'João';
console.log(nome);
// a constante aqui já foi declarada como "João" então ela não pode ser alterada para "Gabriel" por exemplo
// const é usado para que você não possa mudar o valor de uma variável, para que não que possa mudar completamente o comportamento do seu software inteiro
// caso precise mudar essa variável você pode transformar "const" em "let" e assim alterar o valor dessa variável

// você pode atribuir o valor de uma váriavel para outra variável
const primeiroNúmero = 5;
const segundoNúmero = 10;
const resultado = primeiroNúmero * segundoNúmero;
console.log(resultado);
// neste caso foi usado o valor das variáveis para uma conta de multplicação, onde o valor da variável "primeiroNúmero" foi mulplicado pelo valor de "segundoNúmero"
// e em seguida foi pedido o valor de resultado

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
// aqui pegamos o valor da variável "resultado" e mutiplicamos por 2 e obtivemos um valor para "resultadoDuplicado"

console.log(typeof primeiroNúmero);
// neste chamado eu estou pedindo para que me identifique o tipo da variável "primeiroNúmero" no caso é um variável 'number = número' caso o número 5 estivesse drento de aspas '5' ele seria considerado uma variável 'string = text'
