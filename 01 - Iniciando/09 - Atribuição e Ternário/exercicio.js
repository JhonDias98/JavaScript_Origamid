// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scrollSoma = 1000;
scrollSoma += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
//Boolean
darCredito = (possuiCarro && possuiCasa);
//String
darCredito = (possuiCarro && possuiCasa)? 'Dar crédito ao cliente' : 'Negar crédito';