// primeiro eu criei uma variável
let heroisMarvel = ['homem de ferro', 'hulk', 'feiticeira escarlate', 'capita marvel'];

// O primeiro método adicionado é o método .reverse() que inverte o array.
heroisMarvel.reverse();

//O segundo método é o .slice(), ele seleciona uma parte de um array e retorna um novo array.
let limite = heroisMarvel.slice(2, 5);

// O terceito método é o .join(), ele recebe um parâmetro que separar os elementos do array.
let parametro = heroisMarvel.join(" - ");

// O quarto método é o .concat(), ele junta dois ou mais arrays e retorna um novo array. Além também de 
//ter criado outro Array para inserir o método.
let viloesMarvel = ['thanos', 'loki', 'hela', 'ultron'];

let universoMarvel = heroisMarvel.concat(viloesMarvel);

//O quinto método é o .indexOf(), ele retorna o primeiro index do elemento encontrado no array.
let index = heroisMarvel.indexOf('homem de ferro');

// O sexto método é o .includes(). ele verifica se o elemento existe no array e retorna falando se é true ou false.
let isTrue = heroisMarvel.includes('thor')

//Espaço reservado para os consoles.
console.log(heroisMarvel);
console.log(limite);
console.log(parametro);
console.log(universoMarvel);
console.log(index);
console.log(isTrue)