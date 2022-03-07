let num1 = prompt('Digite um número!')
let num2 = prompt('Digite outro número!')
num1 = Number(num1);
num2 = Number(num2);
const resposta = num1 + num2;
alert(`O resultado é: ${resposta}`);
// essa é maneira mais explícita de se fazer

// maneira mais implícita
let num1 = prompt('Digite um número!')
let num2 = prompt('Digite outro número!')
num1 = Number(num1);
num2 = Number(num2);
alert(`O resultado é: ${num1 + num2}`);
// removendo a variável "resposta" você pode colocar a conta direto dentro de ${num1 + num2}; ele vai automaticamente resolver a conta e exibir na tela o resultado
// pode ser mais limpo, mas também pode acasionar alguma dúvida na hora de ler o código, caso ele seja mais complexo
// por isso o mais aconselhável é criar uma variável para a resposta e depois usar essa variável para exibir o resultado