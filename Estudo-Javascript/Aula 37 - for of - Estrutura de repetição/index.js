// valores iteráveis são grupos de valores que podem ser percorridos um a um, como arrays e strings por exemplo.
const nome = 'Vinícius Roviello';
for (let n = 0; n < nome.length; n++){
    console.log(nome[n]);   // ele vai pegar cada letra do meu string e vai colocar na tela separado
}
console.log('###');   //somente pra separar as linhas :)

// faz a mesma coisa que o de cima, mas de uma maneira mais 'clean'
for (let o in nome){   // aqui estou acessando a variável (nome) pelo nome dela, mais o índice dela (o)
    console.log(nome[o]);   // aqui estou pegando o array e puxando o valor dele, para me retornar só o valor
}
// quando se usa 'in' você puxa o índice da variável
console.log('###')


// quando se usa 'of' você puxa o valor da variável
for (let valor of nome){   // aqui estou acessando somente o valor da minha variável
    console.log(valor);
}
console.log('###')

// um modo pra se fazer co uma variável que seja um array
const nomes = ['Vinícius', 'Ana', 'Iraci'];
nomes.forEach(function(valor, indice) {   // forEach recebeu uma função, que recebe o valor e o índice do array
    console.log(valor, indice);
});

// qual utilizar para cada situação, for (clássico), for in ou for of
// os 3 funcionam com Arrays, 'for in' você precisará pegar o array e puxar o valor se você quiser ver o valor
// para Objetos 'for of' não funciona pois um objeto não é iterável

// for (clássico) - geralmente com iteráveis (arrays ou strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em sim (iteráveis, arrays ou strings)