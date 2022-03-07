// aqui tem uma atribuição normal
const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Roviello',
    idade: 28,
    endereço: {
        rua: 'José Gomes Ferreira',
        numero: 54
    }
};
const nome = pessoa.nome; // peguei uma variável 'nome' e fiz ela receber a variável 'pessoa' + o valor de nome
console.log(nome);

// atribuição via desestruturação
const pessoA = {
    nomE: 'Vinícius',
    sobrenomE: 'Roviello',
    idadE: 28,
    endereçO: {
        ruA: 'José Gomes Ferreira',
        numerO: 54
    }
};
const { nomE, sobrenomE, idadE} = pessoA;
console.log(nomE, sobrenomE, idadE);
// você também ao invés de usar o nome da chave, você pode especificar a chave e mudar o nome da variável
// const { nomE: n, sobrenmomE, idadE} = pessoA; assim eu especifiquei a chave que é nomE, mudei o nome da variável pra n
const {endereçO: {ruA, numerO}} = pessoA; // eu extrai o endereço e a rua e mandei exibir
console.log(ruA, numerO);
// para exibir o endereço completo sem precisar buscar rua e número 'const {endereçO: {endereçO}} = pessoa;'