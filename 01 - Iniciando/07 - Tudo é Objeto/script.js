// TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
// Uma string herda propriedades e métodos do construtor String()
var nome = 'Jonathan';

nome.length; // 5
// charAt pega a posição do caracter
nome.charAt(1); // 'n'
// replace altera o valor do primeiro parametro para o segundo
nome.replace('an', 'ana'); // 'Jonathana'
// toLocaleLowerCase altera todas as palavras para minusculo
var nomeMinusculo = nome.toLocaleLowerCase();
// toLocaleUpperCase altera todas as palavras para maiusculo
var nomeMaiusculo = nome.toLocaleUpperCase();


// NÚMEROS
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos
var altura = 1.8;
// toString converte number para string
altura.toString(); // '1.8'
// toFixed arredonda o número
altura.toFixed(); // '2'


// FUNÇÕES
function areaQuadrado(lado) {
  return lado * lado;
}

// Neste caso retorna o corpo da função como string
areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"
// Retorna o total de argumentos
areaQuadrado.length; // 1


// ELEMENTOS DO DOM
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function () {
  console.log('Clicou');
  btn.innerHTML = 'Clicou';
});
