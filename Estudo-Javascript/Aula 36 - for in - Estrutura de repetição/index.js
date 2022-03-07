// for in = faz a leitura dos índices ou chaves do objeto
const frutas = ['Pera', 'Uva', 'Maçã'];
for (let indice in frutas){  // é o mesmo que for (let i = 0; i < frutas.length; i++)
    console.log(frutas[indice]);  // os valores do meu array
    console.log(indice);   // e aqui ele mostra o tamanho do meu array
}

// exemplo com objeto
const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Roviello',
    idade: 28
};
for (let chave in pessoa){
    console.log(pessoa[chave]);   // vai mostra os valores do meu objeto
    console.log(chave);   // ele vai me mostrar as chaves do meu objeto
}
console.log(pessoa.idade);   // outro jeito de acessar algum valor específico do meu objeto
console.log(pessoa['sobrenome']);