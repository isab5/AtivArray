// primeiro eu criei duas variáveis para inicar a atividade.
let heroisMarvel = ['homem de ferro', 'hulk', 'feiticeira escarlate', 'capita marvel'];

let heroisDC = ['Batman', 'superman', 'ciborg', 'robin'];

// O primeiro método adicionado é o método .reverse() que inverte os elementos do array.
// Exemplo 1:
let reverte1 = heroisMarvel.reverse();

console.log(reverte1);

// Exemplo 2:
let reverte2 = heroisDC.reverse();

console.log(reverte2);

// O segundo método é o .slice(), ele seleciona uma parte de um array e retorna "criando" um novo array.
// Exemplo 1:
let limite1 = heroisMarvel.slice(2, 5);

console.log(limite1);

// Exemplo 2:
let limite2 = heroisDC.slice(1, 3);

console.log(limite2);

// O terceito método é o .join(), ele recebe um parâmetro que separar os elementos do array.
// Exemplo 1:
let parametro1 = heroisMarvel.join(" - ");

console.log(parametro1);

// Exemplo 2:
let parametro2 = heroisDC.join(" / ");

console.log(parametro2);

// O quarto método é o .concat(), ele junta dois ou mais arrays e retorna um novo array. Além também de 
//ter criado outro Array para inserir o método.
// Exemplo 1:
let viloesMarvel = ['thanos', 'loki', 'hela', 'ultron'];

let universoMarvel = heroisMarvel.concat(viloesMarvel);

console.log(universoMarvel);

// Exemplo 2:
let viloesDC = ['coringa', 'flash-reverso', 'zoom', 'exterminador'];

let universoDC = viloesDC.concat(heroisDC);

console.log(universoDC);

//O quinto método é o .indexOf(), ele retorna o primeiro index do elemento encontrado no array.
// Exemplo 1:
let index1 = heroisMarvel.indexOf('homem de ferro');

console.log("o index do homem de ferro é:" + index1);

//Exemplo 2: 
let index2 = viloesDC.indexOf('coringa');

console.log("o index do elemento coringa é:" + index2);

// O sexto método é o .includes(). ele verifica se o elemento existe no array e retorna falando se é true ou false.
// Exemplo 1:
let isTrue1 = heroisMarvel.includes('thor')

console.log(isTrue1);

// Exemplo 2:
let isTrue2 = viloesDC.includes('coringa')

console.log(isTrue2);

// O sétimo método é o .toString(), ele converte um array em uma string e retorna o resultado.
// Exemplo 1:
let converte1 = viloesMarvel.toString();

console.log(converte1);

// Exemplo 2:
let converte2 = viloesDC.toString();

console.log(converte2);

// O oitavo método é o .flat() cria um novo array com todos elementos sub-arrays concatenados nele.
// Exemplos 1:
let numeros1 = [5, 10, 15, [20, 25]];

console.log(numeros1.flat());

// Exemplos 2:
let numeros2 = [2, 4, [6, [8, 10]]];

console.log(numeros2.flat(2));

// O nono método é o .map(), utiliza-se o .map() quando queremos fazer alguma modificação nos elementos de um Array. 
// Exemplo 1: dobrando o valor dos números de um Array.
let numeros3 = [3, 6, 9, 12, 15];

console.log(numeros3.map((x) => [x * 2]));

// Exemplo 1: divindo o valor dos número de um Array.
let numeros4 = [25, 30, 35, 40, 45];

console.log(numeros4.map((x) => [x / 5]));

// O décimo e último método é .flatMap(), 
// ele primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array. 
// É idêntico a um map seguido por um flat.
// Exemplo 1: criando um novo array, enquanto o valor dos números está sendo divido.
let numeros5 = [7, 14, 21, 28, 35];

console.log(numeros5.flatMap((x) => [x / 7]));

// Exemplo 2: criando um novo array com todos elementos concatenados neles, enquanto o valor dos números está sendo multiplicado.
let numeros6 = [50, 70, 90, 100, 120];

console.log(numeros6.flatMap((x) => [[x * 10]]));
