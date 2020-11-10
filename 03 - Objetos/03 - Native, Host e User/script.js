// NATIVE
// Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.
// Construtores de objetos nativos
Object;
String;
Array;
Function;

// HOST
// Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.
// Objetos do browser
NodeList;
HTMLCollection;
Element;

// USER
// Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.
const Pessoa = {
  nome: 'Jonathan',
};

// BIBLIOTECAS
// Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.
$('a').addClass('ativo');
$('a').hide();
$('a').show();

// VERIFICAR SE EXISTE
// O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
if (typeof Array.from !== 'undefined') {
  console.log("Existe");
} else {
  console.log("Não existe");
}
if (typeof NodeList !== 'undefined');