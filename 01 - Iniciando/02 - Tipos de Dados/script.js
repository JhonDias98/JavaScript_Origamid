// Todos são primitivos exceto os objetos
var meuNome = 'Jonathan'; // String
var minhaIdade = 22; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// Usando typeof para verificar o tipo da variável
console.log(typeof meuNome, typeof minhaIdade, typeof possuiFaculdade);

// Concatenando as variáveis
var nome = 'Jonathan',
    sobrenome = 'Dias',
    nomeCompleto = 'Me chamo ' + nome + ' ' + sobrenome;
console.log(nomeCompleto)

// Utilizar aspas duplas dentro das simples e vice versa
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

// Template String
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols'; // Utilizando Concatenação
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String