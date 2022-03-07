const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é um número inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} É um NaN? ${isNaN(numero)}</p>`;
texto.innerHTML += `<p> Seu número arredondado pra baixo é: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Seu número arredondado pra cima é: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Seu número com duas casa decimais é: ${numero.toFixed(2)}</p>`;