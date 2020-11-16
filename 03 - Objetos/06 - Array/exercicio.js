const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();
const adicionarComidaInicio = comidas.unshift('Arroz');
const adicionarComidaFinal = comidas.push('Peixe', 'Batata');


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const orderAlfabetica = estudantes.sort();
const inverterOrder = estudantes.reverse();
const verificarJoana = estudantes.includes('Joana');
const verificarJuliana = estudantes.includes('Juliana');


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros = carros.slice();
const removerUltimoCarro = carros.pop();