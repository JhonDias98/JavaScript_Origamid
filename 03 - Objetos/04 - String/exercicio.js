// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numero = +item.valor.replace('R$ ', '');
  if(item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numero;
  } else if(item.descricao.slice(0, 4) === "Rece") {
    recebimentoTotal += numero;
  }
})
console.log(`Taxa Total: ${taxaTotal}`);
console.log(`Recebimento Total: ${recebimentoTotal}`);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransporte = transportes.split(';')


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length -1));


// Retorne o total de taxas
const transacoes = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

let taxasTotais = 0;
transacoes.forEach((item) => {
  item = item.toLowerCase().trim().slice(0, 4);

  if(item === 'taxa') {
    taxasTotais++  
  }
})
console.log(taxasTotais);