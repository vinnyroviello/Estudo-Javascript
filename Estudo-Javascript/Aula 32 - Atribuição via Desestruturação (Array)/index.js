// índice         0      1    2    3     4    5   6   7
const numeros = [2356, 48856, 12, 544, 36987, 14, 26, 48];
const [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, ...resto] = numeros; // aqui foi feita uma atribuição via desestruturação, criei as variáveis e cada elemento do array seguindo a ordem do índice atribuiu o elemento nas variáveis
console.log(terceiroNumero, quartoNumero);
console.log(resto); // neste caso os '...' (rest) fazem uma variável receber os resto dos array, todos os valores que não foram atribuidos por nenhuma outr variável
// dentro disto toda vez que você for criar uma atribuição todas elas devem ser com o mesmo tipo de variável que você você começou
// neste exemplo sempre deve se utilizar 'const', no caso se for 'let', sempre seguirá sendo 'let'
// como eu só pedi para que fosse mostrado pra mim o terceiro, quarto número e o resto (rest) o primeiro e o segundo número não foram mostrados pois eu não pedi e eles estão atribuídos a variáveis por isso também não aparecem no resto (rest)

// índice      0     1     2     3     4     5     6     7
const nume = [1526, 2189, 5678, 3289, 0375, 4135, 2003, 9137];
const [um, , três, , cinco, , sete,] = nume; // ao deixar espaços vazios entre a declaração de variáveis você pula, os índices correspondentes no array
console.log(um, três, cinco, sete);

// exmplos de array dentro de outro array
// índice             0             1             2
// índice          0   1   2     0   1   2     0   1   2  
const numero = [[55, 88, 22], [11, 77, 99], [66, 33, 44]];
console.log(numero[1][2]); // aqui eu estou acessando o primeiro array no índice 1, e pegando no segundo array o índice 2 e mostrando
// agora usando atribuiição via desestruturação
// índice                    0                                  1                             2
// índice          0         1          2            0          1         2           0       1       2
const nomes = [['Jorge', 'Rafaela', 'Giovana'], ['Vinícius', 'Marta', 'Rogerio'], ['Maria', 'Ana', 'José']];
const [,[,,nome]] = nomes; // aqui eu quis acessar o nome 'Rogerio', então eu pulei o primeiro índice com uma , (vírgula) abri o segundo array, nesse segundo array eu pulei os dois primeiros índices com duas , (vírgulas) e atribui uma variável para o índice [2] que é Rogerio
const [lista1, lista2, lista3] = nomes; // aqui foi acessado apenas o primeiro array, e os 3 índices foram atribuidos a variáveis
console.log(nome); // aqui ele vai me mostrar apenas 'Rogerio'
console.log(lista2); // aqui ele vai mes mostrar tudo que está neste array
console.log(lista2[0]); // aqui ele me mostra o array no segundo índice + o índice [0] dentro deste array