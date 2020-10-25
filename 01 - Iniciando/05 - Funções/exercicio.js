// Crie uma função para verificar se um valor é Truthy
function verificarThuthy(valor) {
  if(valor) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}
verificarThuthy(NaN);


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(20));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto("Jonathan", "Dias"));


// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  if(numero % 2 == 0) {
    console.log("Par");
  } else {
    console.log("Impar");
  }
}
verificaPar(20);


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTipo(dado) {
  console.log(typeof(dado));
}
verificarTipo(2);//number


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
  console.log("Jonathan Pereira Dias")
})


// Corrija o erro abaixo - CORRIGIDO
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));