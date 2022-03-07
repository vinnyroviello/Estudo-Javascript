let nome  = 'pai'; // a variável "pai" foi salva no computador (nesse caso está usando "let" pois é a mais utilizada recentemente, mas também pode se usar "var" para criar uma variável)

console.log('Luke eu sou seu', nome,'!');
console.log('Não, você não é meu', nome);
console.log('Claro que eu sou seu', nome, 'Luke');
console.log('Nunca vou aceitar você como meu', nome,'!');
console.log('Tudo bem ainda sim serei seu', nome,);
// agora sempre que precisar alterar a variável "nome", para irmão por exemplo, é só mudar lá em cima onde criamos a variável para colocar o valor dela como "irmao" em todos as posições de "nome"

let nomeFamília; // declarou a variável - neste caso a variável "nomeFamília" foi declarada mas não tem um valor, e mesmo assim quando chamada ela não apresenta erro, pois o que acontece ali é que só reservamos a variável "nomeFamília"
nomeFamília = 'José';
console.log(nomeFamília);
nomeFamília = 'Maria';
console.log(nomeFamília);
// uma variável não pode ser redeclarada com letl, mas o valor da variável pode ser alterada. caso seja alterada a variável sempre terá o último valor que foi alterado
// variáveis não podem ser criadas com palavras reservadas pela linguagem, como por exemplo 'let console' ou 'let if', um erro irá aparcer.
// variáveis precisam ter nomes significativos para que fique fácil a identificação.
// o nome de uma variável não pode começar com um número, exemplo "let 1nome;"
// os nomes de variáveis não podem conter "espaço" ou "traços", exemplo "let nome-Cliente;" ou "let nome Cliente;", isso gera erros.
// caso a variável precise ser composta se utiliza "camelCase", a primeira palavra com letra minúscula e a sgunda palavra com letra maiúscula.
// as variáveis são Case-sensitive, significa que letra maiúscula e letra minúscula faz diferença.
let nomeCliente = 'Luiz';
let nomecliente = 'Alberto';

console.log(nomeCliente, nomecliente);
// neste caso o programa identificou cada variável como uma, pois as letras maiúscul e minúscula de cada variável fez a diferença entre elas.
// NÃO UTILIZE "VAR", SEMPRE UTILIZE "LET"