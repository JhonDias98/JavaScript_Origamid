// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;


// Liste 5 objetos do browser
Window;
Document;
NodeList;
HTMLCollection;
history;


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

// webkitHidden e webkitVisibilityState
if(typeof document.webkitHidden !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}