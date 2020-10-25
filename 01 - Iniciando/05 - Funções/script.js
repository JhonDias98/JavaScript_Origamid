// FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(5));// 25

function pi() {
  return 3.14;
}
var total = 5
console.log(total * pi());


// PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}
var result = imc(80, 1.80)
console.log(result); // 80 e 1.80 são os argumentos


// PARÊNTESES EXECUTA A FUNÇÃO
// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'


// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}
addEventListener('click', function() {
  console.log('Clicou');
});

addEventListener('click', () => {
  console.log('Arrow Function');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima


// PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined


// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}


// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); // erro, totalPaises não definido


// ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Analista de Configuração Jr.';

function dados() {
  var nome = 'Jonathan';
  var idade = 22;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro


// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
// Nesse caso a função mesmo estando abaixo de sua execução ainda vai funcionar
imc(80, 1.8); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}