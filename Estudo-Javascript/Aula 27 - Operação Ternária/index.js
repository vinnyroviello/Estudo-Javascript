// operação tenária '? :' pode substituir partes do código e até mesmo diminuir o código em partes que você precisa de 'if' e 'else'
const pontuação = 896;
if (pontuação >= 1000){
    console.log('Usuário VIP');
} else {
    console.log('Usuário Comum');
}

// exemplo com operação tenária
const pontuacaoUsuario = 1153;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Comum';
console.log(nivelUsuario);
// em uma opração tenária primeiro vem a 'condição' (as vezes a condição terá que ser entre parênteses dependendo do tamnho) depois '?' (o valor para verdadeiro (true)) e depois ':' (o valor para o falso (false))
const corBackground = 'Red';
const corPadrao = corBackground || 'Preto';
console.log(nivelUsuario, corPadrao);
// usando a operação de || (ou) também pode encurtar o código

// aqui eu tentei fazer com que ele identificasse se o usuário era VIP ou Comum, e colocar uma cor dependendo do tipo de usuário
const pontuacao = 862;
const usuarioLevel = pontuacao >= 2000 ? 'Usuário VIP!' : 'Usuário Comum';
const corVip = 'Gold';
const corComum = 'Preto';
if (usuarioLevel == 'Usuário VIP!'){
    console.log(usuarioLevel, corVip);
} else {
    console.log(usuarioLevel, corComum);
}