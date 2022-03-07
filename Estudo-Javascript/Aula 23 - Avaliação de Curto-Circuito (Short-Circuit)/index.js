/*
&& (AND, E) - quando ele identifica um valor falso (false) ele me retorna esse valor na tela (o valor real)
|| (OR, OU) - quando ele identificar o valor verdadeiro (true) ele me retorna esse valor (o valor real)
*/

// && (AND, E)
console.log('Vinícius Roviello' && 0 && 'Ana Carolina');
// quando ele esncontrou o valor falso (false) ele me retornou esse valor falso que é 0, pois 0 é uma expressão que avalia em falso (false) no Javascript
// caso ele 'check' e todos os valores sejam verdadeiros (true) ele vai me retornar o último valor verdadeiro
console.log('Vinícius Roviello' && true && 'Ana Carolina');
// todos os valores eram verdadeiros, então ele me retornou o último valor verdadeiro que era 'Ana Carolina'

// valores considerados Falsos (FALSY VALUE) em Javascript
// false
// 0
// '' "" ``(string vazia)
// null/undefined
// NaN

function falar(){
    return 'Oi';
}

const executar = 'Bom dia';
 console.log(executar && falar());
 // sem nenhuma estrutura condicional, dá pra se fazer uma condição para executar ou não uma condição

 // || (OR, OU)
 console.log(0 || false || null || 'Vinícius Roviello' || true);
 // para o Javascript 'Vinícius Roviello' é um string verdadeira, então ele me retornou na tela
 // mesmo tendo outro valor verdadeiro depois de 'Vinícius Roviello' ele você mostrar o primeiro valor verdadeiro (true) que ele encontrou
 const corUsuario = null;
 const corPadrao = corUsuario || 'Vermelho';

 console.log(corPadrao);
 // aqui também sem uma estrutura condicional, eu consigo fazer com que caso meu usuário não selecione uma cor, a página dele matenha a cor padrão que é vermelho
 const corPagina = 'Azul';
 const corMarca = corPagina || 'Vermelho';

 console.log(corMarca);
 // o usuário trocou a cor da sua página para Azul, então foi aplicada a codição de que se o usuário trocar a cor vai se manter a cor que o usuário escolheu
 // seguindo a lógica no primeiro exemplo ele passou pelos dois valores null e 'Vermelho' e só 'vermelho era verdadeiro (true) então mostrou o valor 'Vermelho'
 // no segundo exemplo ele passou pelos valores 'Azul' e 'Vermelho' e como os dois eram valores verdadeiros, ele mostrou o primeiro valor verdadeiro (true) que é 'Azul'
 