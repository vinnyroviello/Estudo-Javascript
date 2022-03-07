const pessoa1 = {
nome: 'Vinícius',
sobrenome: 'Freitas',
idade: 28,

fala (){
    console.log(`${this.nome} ${this.sobrenome} está dizendo Oi!`);
}
};
pessoa1.fala();

// quando uma função está dentro de um objeto, ela é chamada de método
// com ${this} você pode referênciar o objeto e qualquer atributo desse objeto dentro de um método

const soma = {
    fruta: 'Maçã',
    quantidade: 1,

    incremento(){
        this.quantidade++;
    },  // sempre colocar uma ',' (vírgula) para separar os métodos
    
    fala(){
        console.log(`Eu tinha 1 ${this.fruta}, agora eu tenho ${this.quantidade}`);
    }
};

soma.incremento(); // cada vez que chamar esse método vai ser incrementado mais 1
soma.fala();