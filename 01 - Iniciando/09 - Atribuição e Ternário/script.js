// COMENTÁRIOS - Servem para explicar o código
// Comentário de uma linha
/*
Comentário
com diversas
linhas
*/


// OPERADORES DE ATRIBUIÇÃO
// Podem funcionar como formas abreviadas
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


// OPERADOR TERNÁRIO
// Abreviação de condicionais com if e else
// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber
// condição ? true : false


// IF ABREVIADO
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
var possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');
// ou
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');