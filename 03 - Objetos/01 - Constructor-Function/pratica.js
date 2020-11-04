// Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.
const Dom = {
  seletor: 'li',
  element() { // element: function(){}
    return document.querySelector(this.seletor);
  },
  ativo() { // ativo: function(){}
    this.element().classList.add('ativo');
  },
}
Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); // adiciona ativo ao ul


// CONSTRUCTOR FUNCTION REAL
// Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.
function DomConstructor() {
  this.seletor = 'li';
  const element = document.querySelector(this.seletor);
  this.ativo = function () {
    element.classList.add('ativo');
  };
}

const lista = new DomConstructor();
lista.seletor = 'ul';
lista.ativo();

const lastLi = new DomConstructor();
lastLi.seletor = 'li:last-child';
lastLi.ativo();


// LEMBRE-SE DE USAR PARÂMETROS
function DomParametro(seletor) {
  const element = document.querySelector(seletor);
  this.ativo = function (classe) {
    element.classList.add(classe);
  };
}

const lista1 = new DomParametro('ul');
lista1.ativo('ativo');

const lastLi1 = new DomParametro('li:last-child');
lastLi1.ativo('ativo');
