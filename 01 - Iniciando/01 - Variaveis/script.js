var nome = 'Jonathan Dias';
let idade = '22';
const possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

// Efetuando conta
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado + preco;
console.log(totalPreco);

// Utilizando vírgula para não precisar repetir a palavra var
var sobrenome = 'Dias', 
    cidade = 'Mauá';
console.log(sobrenome, cidade);

// Var sem valor
var semDefinir;
console.log(semDefinir);

// Modicicando valores da variáveis
var minhaIdade = 22;
idade = 23; // Modificou para 23
console.log(minhaIdade)

let meuPeso = 75;
meuPeso = 77; // Modificou para 77
console.log(meuPeso);

const possuiEmprego = true;
possuiEmprego = false; // Vai dar erro, pois não é possivel alterar o valor de uma const
console.log(possuiEmprego);
