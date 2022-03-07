// index nos Arrays
//            0123456789...
const nome = 'Vinícius Roviello'
console.log(nome[4])
//               0           1        2
const alunos = ['Vinícius', 'Maria', 'João'];
console.log(alunos[0]);
// arrays são indexados de for diferente, cada array corresponde a uma posição no índice

// arrays podem ter seu valor trocado, e também pode ser adcionar um novo array
const alunos1 = ['Vinícius', 'Maria', 'João'];

alunos1[1] = 'Carolina';
alunos1[3] = 'Luiza';
console.log(alunos1);

// caso você não saiba o tamanho do array e precise adicionar mais um array na lista você pode encontrar o tamanho do array
const alunos2 = ['Vinícius', 'Maria', 'João'];
console.log(alunos2.length);
// lembrando que ele vai mostrar quantos arrays tem e não a posição, então se tiver 3 elementos fora usados as posições 0, 1 e 2

// você também pode adicionar um array mesmo sem saber quantos arrays já existem
const alunos3 = ['Vinícius', 'Maria', 'João'];

alunos3[alunos3.length] = 'Rogerio';
alunos3[alunos3.length] = 'Renata';
alunos3[alunos3.length] = 'Maurício';
console.log(alunos3);
// aqui foram adicionados novos arrays sempre na ultima posição e seguindo a ordem

const alunos4 = ['Vinícius', 'Maria', 'João'];

alunos4.push('Rodrigo');
alunos4.push('Mario');
alunos4.push('Letícia');
alunos4.push('Fábio');

console.log(alunos4);
// aqui todos foram adicionados também na última posição, mas sem que eu precisasse indicar onde era o final dos arrays

const alunos5 = ['Vinícius', 'Maria', 'João'];

alunos5.unshift('Carolina');

console.log(alunos5);
// aqui foi adicionado um array na primeira posição e empurrando os outro para a frente

// caso adicione mais que um array na frente, ele vai seguir a ordem  da lista que você criou
const alunos6 = ['Vinícius', 'Maria', 'João'];

alunos6.unshift('Carolina');
alunos6.unshift('Marcos');

console.log(alunos6);
// ele vai seguir a ordem de colocar a ' Carolina' primeiro, e depois na frente da 'Carolina' ele vai colocar o 'Marcos'

// caso você precise remover um array da ultima posição
const alunos7 = ['Vinícius', 'Maria', 'João'];

alunos7.pop();
console.log(alunos7);
// e para remover um arrya da primeira posição
const alunos8 = ['Vinícius', 'Maria', 'João'];

alunos8.shift();
console.log(alunos8);

// lembrando que quando você remove um elemento você altera os índices dos outros elementos
// caso você queira remover ujm elemento e não alterar nenhum índice você precisa usar 'delete'
const alunos9 = ['Vinícius', 'Maria', 'João'];

delete alunos9[1];
console.log(alunos9);
// sempre ira aparecer no lugar do elemento removido um elemento vazio (1 empty item)

// você pode procurar um elemento que não exista, e o programa vai te retornar um valor indefinido (undefined)
const alunos10 = ['Vinícius', 'Maria', 'João'];

console.log(alunos10[10]);
// você pode procurar um elemento que não exista, mas não pode acessar, se você tentar acessar um elemento que não exista ele vai dar erro

// você pode 'fatiar' os arrays conforme você precise
const alunos11 = ['Vinícius', 'Maria', 'João', 'Nathalia', 'Carolina'];

console.log(alunos11.slice(0, 3)); // aqui ele 'fatia' de frente para trás ->
console.log(alunos11.slice(0, -1)); // e aqui de trás pra frente <-
// aqui neste caso eu pedi que me mostrasse os 3 primeiro arrays
// lembrando que ele não vai colocar por posição de índice, aqui ele vai contar o tamanho do array, então não vai ser 012345... e sim 12345...

const alunos12 = ['Vinícius', 'Maria', 'João'];

console.log(typeof alunos12); // estou pedindo que ele me fale de que tipo são esses elementos 
console.log(alunos12 instanceof Array); // e aqui que ele me confirme de que esses elementos são um Array
// o Array no JavaScript é considerado um 'obeject', porque afinal Array é um objeto indexado (diferente de objeto comum)

// OBS: É ACONSELHÁVEL SEMPRE TENTAR TRABALHAR COM ARRAY ADCIONANDO, REMOVENDO AO FINAL, QUE ASSIM NBÃO AFETA OS ÍNDICES DE OUTROS ELEMENTOS
// E NÃO ATRAPALHA A PERFORMANCE DO PROGRAMA (MAS TAMBÉM DEPENDO DO CASO)