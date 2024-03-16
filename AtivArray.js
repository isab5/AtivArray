// primeiro eu criei uma variável
let heroisMarvel = ['homem de ferro', 'hulk', 'feiticeira escarlate', 'capita marvel'];

// O primeiro método adicionado é o método .reverse() que inverte o array.
let reverte = heroisMarvel.reverse();

console.log(reverte);

//O segundo método é o .slice(), ele seleciona uma parte de um array e retorna um novo array.
let limite = heroisMarvel.slice(2, 5);

console.log(limite);

// O terceito método é o .join(), ele recebe um parâmetro que separar os elementos do array.
let parametro = heroisMarvel.join(" - ");

console.log(parametro);

// O quarto método é o .concat(), ele junta dois ou mais arrays e retorna um novo array. Além também de 
//ter criado outro Array para inserir o método.
let viloesMarvel = ['thanos', 'loki', 'hela', 'ultron'];

let universoMarvel = heroisMarvel.concat(viloesMarvel);

console.log(universoMarvel);

//O quinto método é o .indexOf(), ele retorna o primeiro index do elemento encontrado no array.
let index = heroisMarvel.indexOf('homem de ferro');

console.log(index);

// O sexto método é o .includes(). ele verifica se o elemento existe no array e retorna falando se é true ou false.
let isTrue = heroisMarvel.includes('thor')

console.log(isTrue);

// O sétimo método é o .toString(), ele converte um array em uma string e retorna o resultado.
let converte = viloesMarvel.toString();

console.log(converte);

// O método .flat() cria um novo array com todos elementos sub-arrays concatenados nele.
let numeros1 = [5, 10 , 15, [20, 25]];

console.log(numeros1.flat());

let numeros2 = [2, 4, [6, [8, 10]]];

console.log(numeros2.flat(2));