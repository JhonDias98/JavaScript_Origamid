// HEIGHT E WIDTH
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll
// Mesma coisa para o Width, clientWidth ...


// OFFSETTOP E OFFSETLEFT
// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


// GETBOUNDINGCLIENTRECT()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll
console.log(rect.top)  

const primeiroh2 = document.querySelector('h2');
const h2react = primeiroh2.getBoundingClientRect();
console.log(h2react.top) 


// WINDOW
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical



if (window.innerWidth < 600) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}


// MATCHMEDIA();
// Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');
// matches retorna boolean
if (small.matches) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}

