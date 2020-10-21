// Declare uma variável contendo uma string
var texto = 'Isso é um texto';
console.log(texto);

// Declare uma variável contendo um número dentro de uma string
var numeroString = '2020';
console.log(numeroString);

// Declare uma variável com a sua idade
var idade = 22;
console.log(idade)

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Jonathan',
  sobrenome = 'Dias',
  nomeCompleto = 'Me chamo ' + nome + ' ' + sobrenome,
  nomeCompleto2 = `${nome} ${sobrenome}`;
console.log(nomeCompleto, nomeCompleto2);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's Time";
var frase2 = 'It\'s Time';
var frase3 = `It's Time`;
console.log(frase, frase2, frase3);

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome;
console.log(verificarTipoNome);