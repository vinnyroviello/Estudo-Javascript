// exemplo let
const verdadeira = true;
// let tem escopo de bloco {...} uma variável let não pode ser redeclarado dentro do mesmo escopo
let nome = 'Vinícius'; // criada
var sobrenome = 'Roviello';
// mas uma variável let pode ser 'recriada' dentro de outro escopo
if (verdadeira){
    let nome = 'Freitas' // criada
// aqui as coisas ocorrem de maneira aninhada, primeiro ele checa o primeiro if, depois o segundo [bloco aninhado]
    if (verdadeira){
        let nome = 'Loki'; // criada
        console.log(nome, sobrenome);
    }
}
// como let o Javascript vai buscar a variável sempre sentro do bloco neste caso 'let nome = 'Loki';', caso ela não existisse ele iria buscar no outro bloco 'let nome = 'Freitas';' caso esse também não exista ele vai chegar até a nossa primeira variável let 'let nome = 'Vinícius;'
// caso não tenha numa variável correspondente o programa acusará erro
// se meu console.log estiver no escopo global o Javascript vai priorizar as variáveis 'let' que estiverem no escopo global

// exemplo var
const verdadeiro = true;
// var tem escopo de função então pode ser redeclarada
let nome2 = 'Vinícius'; // criada
var sobrenome2 = 'Roviello'; // criada
if (verdadeiro){
    let nome2 = 'Loki'; // criada
    var sobrenome = 'Silva' // redeclarada
    if (verdadeiro){
        let nome2 = 'Kami'; // criada
        var sobrenome2 = 'Freitas'; // redeclarada
    }
}
console.log(nome2, sobrenome2);
// em 'var' se meu console.log estiver dentro de um escopo ele vai priorizar as variáveis 'var' do escopo que ele estiver 'pra trás' ou seja se eu tiver 5 escopos e colocar meu console.log no 3º escopo ele vai buscar as variáveis 'var' do 3º até o 1º
// mas se eu colocar meu console.log no escopo global o Javascript vai priorizar as variáveis 'var' que estiverem dentro do ultimo escopo, diferente de 'let' que prioriza as que estiverem no escopo global

function falaOi(){
// 'função' tem um escopo 'especial' ela protege qualquer variável que estiver dentro dela
    var fala = 'OI';
    console.log(fala); // por isso esse console.log obrigatoriamente tem que estar dentro da função para acessar a variável 'var fala = 'OI';'
}
falaOi();
// mas uma função pode usar uma variável de fora dela
var meuSobrenome = 'Roviello';
function meuNome(){
    console.log(meuSobrenome);
}
meuNome();
// let e var também tem comportamentos diferente dentro de uma função
function saudacao(){
    if (verdadeira){
        let oiTudoBem = 'Oi, tudo bem?'; // console.log não acessa 'let' dentro do escopo da 'função', mas fora do escopo de 'if'
        var comoVoceEsta = 'Como você está?' // console.log acessa 'var' mesmo fora do escopo de 'if'
    }
    console.log(comoVoceEsta); // meu 'console.log' está dentro do escopo da 'função', mas fora do escopo de 'if'
}
saudacao();