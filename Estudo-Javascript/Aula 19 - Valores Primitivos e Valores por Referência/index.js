// Primitivos (dados imutáveis) = String, Number, Boolean, undefined, null, Bigint, Symbol
// quando se fala de 'dados' significa o valor
let a = 'Bom dia';
let b = a;
console.log(a, b);

a = 'Boa Tarde';
console.log(a, b);
// os valores que são primitivos são "copiados" quando passamos o valor de uma variável para outra usando o sinal de atribuição = (igual)
// sempre que você que você falar que uma variável recebe outra vai depender do tipo de dado que tem em uma variável para saber se vai ser copiado ou passado por referência
// Valores Primitivos são Valores Copiados

// Referência (dados mutável) - Array, Object, Function
let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);
// os valores primitivos você a ponto um valor na memória
// por isso quando você diz que uma variável de o valor de outra ele sempre vai apontar pra um local na memória
// e qualquer alteração que essa variável tiver vai ser referenciada em todas as variáveis que apontam para esse local na memória
// Valores por Referência são Passados por Referência

// valores por referência também podem ser copiados igual aos valores primitivos
let e = [1, 2, 3];
let f = [...e];
let g = f;

console.log(e, f, g);

e.push(4);
console.log(e, f, g);
// nesse caso foi copiado o valor de 'e' para 'f' e mesmo adicionando um valor em 'e', 'f' não foi alterado pois copiou o primeiro valor de 'e'