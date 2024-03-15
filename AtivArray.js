// primeiro eu criei uma variável
let heroisMarvel = ['homem de ferro', 'hulk', 'feiticeira escarlate', 'capita marvel'];

// primeiro método adicionado é o método .reverse() que inverte o array.
heroisMarvel.reverse();

//O segundo método é o .slice(), ele seleciona uma parte de um array e retorna um novo array.
let limite = heroisMarvel.slice(2, 5);

// O terceito método é o .join(), ele recebe um parâmetro que separar os elementos do array.
let parametro = heroisMarvel.join(" - ")

//Espaço reservado para os consoles.
console.log(heroisMarvel);
console.log(limite);
console.log(parametro);