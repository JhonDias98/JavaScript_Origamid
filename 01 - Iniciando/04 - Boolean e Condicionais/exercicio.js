// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil == china) {
  console.log("Os valores são iguais");
} else if(brasil > china) {
  console.log("O Brasil possui mais habitates")
} else {
  console.log("A China possui mais habitantes")
}

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');// Falso
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão'); //Cão
} else {
  console.log('Falso');
}