for (let i = 0; i <=5; i++){
    console.log(`Pessoa ${i}`);
}
// pode se começar de qualquer número seja negativo ou positivo

// também pode se 'subtrair' apenas alterando os sinas para >= e -- para poder 'subtrair'
// outra coisa que também pode se fazer é estipular quantos 'números' você vai vai avançar por linha usando i -= 5 ou i += 10 por exemplo
for (let a = 10; a >= 1; a -= 2){
    console.log(`Casa ${a}`)
}
// aqui está 'subtraindo' de 20 à 1 e indo de 2 em 2

for (let b = 0; b <= 10; b++){
    const par = b % 2 === 0 ? 'par' : 'ímpar';  // aqui foi perguntado se o valor atual da minha variável é divisível por 2
    console.log(b, par);
}
// aqui o ? é igual um if se o valor da minha variável for verdadeira conforme a minha condição ele vai nomea-lá com 'par', se não : vai nomea-lá com impar 

// índice          0       1      2        3
const frutas = ['Maçã', 'Pêra', 'Uva', 'Melancia'];
for (let f = 0; f < frutas.length; f++){
    console.log(`Índice ${f}`, frutas[f]);
}
// aqui eu declarei meu array e pedi que me mostrasse o tamanho do meu array e o valor de cada posição do meu array