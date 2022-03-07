function saudação(nome) {  // função
   return `Bom dia ${nome}!`; // o que a função retrorna
}

const janela = saudação('Vinícius'); // o que a função recebe
console.log(janela); // mostrar a função na tela
// uma função pode receber um valor, executar uma ação, e pode também ou não retornar um valor
// muitas função não vão retornar valor

function soma(x, y){
    const resultado = x + y; // 'protegido'
    return resultado; //'protegido'
}

console.log(soma(12, 8));
console.log(soma(25, 98));
console.log(soma(15, 6));
// tudo que estiver dentro da função não pode ser acessado de fora ('protegido')
// a função você pode acessar normalmente
// quando o programa encontrar a palavra 'return' ele não executará nada após 'return'. 'return' finaliza a função

function somar(x = 1, y = 1){
    const valor = x + y;
    return valor;
}

const valor = soma(4, 2);
console.log(valor);
// mesmo a função tendo um valor fixo você poderá mudar o valor

const raiz = function(n){
  return n ** 0.5;
}; // sempre que você indicar que a variável recebe aquela função você precisa terminar a expressão com ';' (ponto e vírgula)
 console.log(raiz(9));
 console.log(raiz(16));
 console.log(raiz(25));
 console.log(raiz(36));
// você também pode criar uma função com '=>' (arrow function) que funciona do mesmo jeito

const divisão = n => n / 3; // isso também é uma função | quando só tem um parâmetro você pode eliminar os parênteses ()

console.log(divisão(9));
console.log(divisão(6));
console.log(divisão(12));

function cadastro(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
}

const pessoa1 = cadastro('Vinícius', 'Freitas', 28);
const pessoa2 = cadastro('Maria', 'Oliveira', 59);
const pessoa3 = cadastro('Paulo', 'Ricardo', 12);
const pessoa4 = cadastro('Yasmim', 'Freire', 17);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa4);
// function cadastro(nome, sobrenome, idade){ quando você cria uma função o que está dentro do parênteses são chamado de 'parâmetro'
// const pessoa = cadastro('Vinícius', 'Freitas', 28); aqui o que está dentro dos parênteses se chama 'argumentos' e você envia os argumentos para os parâmetros