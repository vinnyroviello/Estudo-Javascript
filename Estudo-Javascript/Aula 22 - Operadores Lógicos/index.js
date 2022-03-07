 /* Operadores Lógicos
 && - em Inglês AND em Português E
 || - em Inglês OR em Português OU
 ! - em Inglês NOT em Português NÃO
*/

// && exemplo: para sair eu preciso ter dinheiro e o dia tem que estar ensolarado
const dinheiro = true;
const sol = true;
const comparação = dinheiro && sol;
console.log(comparação);
// aqui eu afirmei que eu tenho dinheiro e o dia está ensolarado, então o programa me retornou que eu posso sair pois as duas afirmações são verdadeiras (true)
// caso alguma afirmação seja falsa (false) toda a operação me retornará false
// exemplo: para sair com a minha namorada eu preciso de um cartão de crédito, uma namorada e a pandemia deverá ter acabado
const cartão = true;
const namorada = true;
const pandemia = false;
const sair = cartão && namorada && pandemia;
console.log(sair);
// aqui a pandemia não acabou então ela é (false) por isso todo o resultado deu false, pois eu não cumpri todas as condições para poder sair
// com && (AND, E) todas as expressões precisam ser verdadeiras para se retornar true

// || exemplo: para ir ao parque eu preciso ter acesso ao transporte público ou ter um carro
const ônibus = true;
const carro = false;
const parque = ônibus || carro;
console.log(parque);
// aqui eu tenho acesso ao transporte público por isso posso ir ao parque (true)
// com || (OR, OU) eu só preciso que uma condição seja verdadeira para que meu resultado seja verdadeiro

// ! exemplo: se eu estiver doente eu não posso passear
const doente = true;
const passear = !doente;
console.log(sair);
// aqui nesse caso eu confirmei que estou doente, e neguei para a variável que eu poderia sair
// com ! (NOT, NÃO) você nega o valor caso seja True e você negue ela vira False, caso seja False e você negue ele vira True
// você pode usar mais de uma vez o ! (NOT, NÃO) você "negaria a negação" e retornaria o valor da váriavel ao seu valor normal
const verdade = !!false;
const falso = verdade;
console.log(falso);
// o primeiro (!) transforma o false em true, e o segundo (!) tranforma o true em false novamente