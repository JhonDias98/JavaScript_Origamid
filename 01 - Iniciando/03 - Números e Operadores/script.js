// Números
var idade = 22;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
console.log(idade, pi, exp);

// Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

// Operadores Aritméticos(Strings)
var somaString = '100' + 50; // 10050
var subtracaoString = '100' - 50; // 50 - como não existe subtração de string, é verificado se é possivel efetuar a operação
var multiplicacaoString = '100' * '2'; // 200
var divisaoString = 'Comprei 10' / 2; // NaN (Not a Number)
console.log(somaString, subtracaoString, multiplicacaoString, divisaoString);

// NAN = NOT A NUMBER
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(numero, unidade, peso, pesoPorDois);

// Ordem importa
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
console.log(total1, total2, total3, total4);

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var frase = 'Isso é um teste';
+frase; // NaN - Ultilizando o sinal de + ou -, a string é transformada em número.
-frase; // NaN - Nesse caso como não é possivel, retorna NaN

var idade = '22';
+idade; // 22 (número) - Já aqui da certo
-idade; // -22 (número)
console.log(+idade + 5); // 27

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1