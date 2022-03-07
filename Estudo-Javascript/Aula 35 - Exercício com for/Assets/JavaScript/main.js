const elementos = [
    {tag: 'p', texto: '“Todo homem morre, mas nem todo homem é lembrado.” – Frase do filme O Patriota'}, 
    {tag: 'div', texto: '“O que fazemos na vida, ecoa na eternidade” – Frase do filme Gladiador'}, 
    {tag: 'footer', texto: '“Não são as nossas habilidades que mostram o que realmente somos… são nossas escolhas” – Frase do Filme Harry Potter.'}, 
    {tag: 'section', texto: '“Nunca deixe que alguém lhe diga que não pode fazer algo. Se você tem um sonho, tem que protegê-lo. As pessoas que não podem fazer por si mesmas, dirão que você não consegue. Se quer alguma coisa, vá e lute por ela. Ponto final.” – Frase do filme À Procura da Felicidade.'},
];
const container = document.querySelector('.container'); // aqui estou acessando minha class container no HTML
const div = document.createElement('div'); // aqui foi criado um elemento que vai conter todos os elementos do meu array

for (let i =0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag); // criando a tag
    tagCriada.innerText = texto; // innerText porque eu sei que só tem texto na minha variável
    div.appendChild(tagCriada);
}

container.appendChild(div);