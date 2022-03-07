const nome = 'Vinícius';
const sobrenome = 'Roviello';
const idade = 28;
const peso = 74;
const alturaEmM = 1.69;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2021 - 1 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'KG', 'tem', alturaEmM,'de altura','e seu IMC é de', imc,);
console.log(nome, 'nasceu em', anoNascimento,);

// outra opção é colocar entre 'crase' ` ` e as variáveis em ${}
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}KG, tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
// nesta opção fica mais nitído as variáveis e os textos, e é mais comum de se usar
