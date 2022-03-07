const hora = 16;
 if (hora >= 0 && hora <= 11) {
     console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
     console.log('Boa tarde!');
} else if (hora>= 18 && hora <= 23) {
     console.log('Boa noite!');
} else {
    console.log('Olá!');
}

// 'if' pode ser usado sozinho
// 'else' sempre precisa de um if antes dele
// 'else if' podem existir vários na checagem
// 'else' só pode ter um na checagem
// podemos usar condições sem 'else if' utilizando apenas if e else

const clima = true;
const dinheiro = false;

if (clima, dinheiro) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}