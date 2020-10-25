// nomeie 3 propriedades ou métodos de strings
var nome = 'Jonathan'
// fixed
// blink
// indexOf


// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
// addEventListener
// appendChild
// insertAdjacentText
// matches
// outerHTML


// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function clickBord() {
  var copiarTexto = document.getElementById('texto');
  copiarTexto.select();
  copiarTexto.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Texto copiado: ' + copiarTexto.value);
}