// os dados primitivos são string, number, undefined, null, boolean e symbol (*symbol mais pra frente)
const nome = 'Vinícius'; // string = text
const nome1 = 'Freitas'; // string = text
const nome3 = 'Roviello'; // string = text
const num1 = 2; // number = número
const num2 = 8; // number = número
let nomeAluno; // undefined = um valor indefinido, não aponta para um local na memória
const sobrenomeAluno = null; // null = valor nulo, não aponta para um local na memória
// um exmplo de null quando você pode mudar um tema de algo, em quanto não tiver um tema definiddo e ele fica como null, mas você acaba mudando o tema para vermelho (red), esse valor null muda para red, e se você remover a o tema vermelho para nenhum ele volta para null.
// a diferença entre null e undefined é que undefined é a linguagem que coloca quando você não declara o valor de um variável, e null é quando você específica que aquela variável não tem que apontar para nada até receber uma "ordem" do usuário
const alunoAprovado = false; // Boolean = true para algo que for verdadeiro, e false para quando algo for falso. (valor lógico)

console.log(typeof alunoAprovado, alunoAprovado); // aqui você consegue ver qual é o tipo de qualquer variável
