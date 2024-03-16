// primeiro eu criei dois Array para inicar a atividade.
let heroisMarvel = ['homem de ferro', 'hulk', 'feiticeira escarlate', 'capita marvel']; // primeiro Array.

let heroisDC = ['Batman', 'superman', 'ciborg', 'robin']; // Segundo Array.

// O primeiro método adicionado é o método .reverse() que inverte os elementos do array.
// Exemplo 1:
let reverte1 = heroisMarvel.reverse(); // Aplicando o método reverse() no Array "heroisMarvel)".

console.log(reverte1); // Ele exibe a inversão da ordem dos elementos do Array "heroisMarvel", que é: [ 'capita marvel', 'feiticeira escarlate', 'hulk', 'homem de ferro' ]

// Exemplo 2:
let reverte2 = heroisDC.reverse(); // Aplicando o método reverse() no Array "heroisDC".

console.log(reverte2); // Ele exibe a inversão da ordem dos elementos do Array "heroisDC"; que é: [ 'robin', 'ciborg', 'superman', 'Batman' ]

// O segundo método é o .slice(), ele seleciona uma parte de um array e retorna "criando" um novo array.
// Exemplo 1:
let limite1 = heroisMarvel.slice(2, 5); // Aplicando o método slice, que selecionou uma parte do Array "heroisMarvel".

console.log(limite1); // Exibe a parte do Array "heroisDC" selecionado. Exibe: [ 'hulk', 'homem de ferro' ]

// Exemplo 2:
let limite2 = heroisDC.slice(1, 3); // Aplicando o método slice, que selecionou uma parte do Array "heroisDC"

console.log(limite2);  // Exibe a parte do Array selecionada. Exibição: [ 'ciborg', 'superman' ]

// O terceito método é o .join(), ele recebe um parâmetro que separar os elementos do array.
// Exemplo 1:
let parametro1 = heroisMarvel.join(" - "); // Aplicando o método join(), adicioando um fator para separar os elementos do Array.

console.log(parametro1); // Ele exibe o fator separando os elementos, que é igual a: capita marvel - feiticeira escarlate - hulk - homem de ferro

// Exemplo 2:
let parametro2 = heroisDC.join(" / "); // Aplicando o método join(), adicioando um fator para separar os elementos do Array.

console.log(parametro2); // Ele exibe o fator separando os elementos, que é igual a: robin / ciborg / superman / Batman

// O quarto método é o .concat(), ele junta dois ou mais arrays e retorna um novo array. Além também de 
//ter criado outro Array para inserir o método.
// Exemplo 1:
let viloesMarvel = ['thanos', 'loki', 'hela', 'ultron']; // Criei um Array para juntar com outro já existente (o Array "heroisMarvel").

let universoMarvel = heroisMarvel.concat(viloesMarvel); // Aplicando o método concat e juntando dois Array para criar um novo.

console.log(universoMarvel); //Exibe um novo Array, que é: ['capita marvel', 'feiticeira escarlate', 'hulk', 'homem de ferro', 'thanos', 'loki', 'hela', 'ultron']

// Exemplo 2:
let viloesDC = ['coringa', 'flash-reverso', 'zoom', 'exterminador']; // Criei um Array para juntar com outro já existente (o Array "heroisDC").

let universoDC = viloesDC.concat(heroisDC); // Aplicando o método concat e juntando dois Array para criar um novo.

console.log(universoDC); //Exibe um novo Array, que é: ['coringa', 'flash-reverso', 'zoom','exterminador', 'robin', 'ciborg', 'superman', 'Batman']

//O quinto método é o .indexOf(), ele retorna o primeiro index do elemento encontrado no array.
// Exemplo 1:
let index1 = heroisMarvel.indexOf('homem de ferro'); // Apliquei o método .indexOf, coloquei o elemento 'homem de ferro' do Array "heroisMarvel", e o indexOf vai exibir o index dele ('homem de ferro') no Array.

console.log("o index do homem de ferro é:" + index1); // Coloquei uma mensagem e vai exibir a seguinte mensagem: o index do homem de ferro é:3

//Exemplo 2: 
let index2 = viloesDC.indexOf('coringa'); // Apliquei o método .indexOf, coloquei o elemento 'coringa' do Array "viloesDC", e o indexOf vai exibir o index dele ('coringa) no Array.

console.log("o index do elemento coringa é:" + index2); //Coloquei uma mensagem e vai exibir a seguinte mensagem: o index do elemento coringa é:0

// O sexto método é o .includes(). ele verifica se o elemento existe no array e retorna falando se é true ou false.
// Exemplo 1:
let isTrue1 = heroisMarvel.includes('thor') // Apliquei o método .includes() para ele verificar se o elemento 'thor' existe no Array "heroisMarvel".

console.log(isTrue1); // Aqui ele vai exibir "true" se o elemento 'thor' existir no Array e vai exibir "false" se ele não existir. E o console exibe: false

// Exemplo 2:
let isTrue2 = viloesDC.includes('coringa')  // Apliquei o método .includes() para ele verificar se o elemento 'coringa' existe no Array "viloesDC".

console.log(isTrue2); // Aqui ele vai exibir "true" se o elemento 'coringa' existir no Array e vai exibir "false" se ele não existir. E o console exibe: true

// O sétimo método é o .toString(), ele converte um array em uma string e retorna o resultado.
// Exemplo 1:
let converte1 = viloesMarvel.toString(); // Aplicando o método toString() para ele transformar o Array "viloesMarvel" em uma string.

console.log(converte1); // Aqui ele exibe a conversão do Array em string, que resulta em: thanos,loki,hela,ultron

// Exemplo 2:
let converte2 = viloesDC.toString();  // Aplicando o método toString() para ele transformar o Array "viloesDC" em uma string.

console.log(converte2); // Aqui ele exibe a conversão do Array em string, que resulta em: coringa,flash-reverso,zoom,exterminador

// O oitavo método é o .flat() cria um novo array com todos elementos sub-arrays concatenados nele.
// Exemplos 1:
let numeros1 = [5, 10, 15, [20, 25]]; // Criei um Array em números.

console.log(numeros1.flat()); // Ele exibe um resultado retirando o colchete menor que está dentro do colchete mmaior. E a exibição é semelhante a: [ 5, 10, 15, 20, 25 ]

// Exemplos 2:
let numeros2 = [2, 4, [6, [8, 10]]]; // Criei um Array em números.

console.log(numeros2.flat(2)); // Ele exibe um resultado retirando o dois colchetes menores que estão dentro do colchete mmaior. E a exibição é semelhante a: [ 2, 4, 6, 8, 10 ]

// O nono método é o .map(), utiliza-se o .map() quando queremos fazer alguma modificação nos elementos de um Array. 
// Exemplo 1: dobrando o valor dos números de um Array.
let numeros3 = [3, 6, 9, 12, 15]; // Criei um Array em números.

console.log(numeros3.map((x) => [x * 2])); // Aqui eu aplico o método .map(), que vai multiplicar o valor dos elementos do Array por 2, e a sua exibição se assemelha a: [ [ 6 ], [ 12 ], [ 18 ], [ 24 ], [ 30 ] ]

// Exemplo 1: divindo o valor dos número de um Array.
let numeros4 = [25, 30, 35, 40, 45]; // Criei um Array em números.

console.log(numeros4.map((x) => [x / 5])); // Aqui eu aplico o método .map(), que vai dividir o valor dos elementos do Array por 5,  e a sua exibição se assemelha a: [ [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ] ]

// O décimo e último método é .flatMap(), 
// ele primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array. 
// É idêntico a um map seguido por um flat.
// Exemplo 1: criando um novo array, enquanto o valor dos números está sendo divido.
let numeros5 = [7, 14, 21, 28, 35]; // Criei um Array em números.

console.log(numeros5.flatMap((x) => [x / 7])); // Aqui eu aplico o método .flatmap(), ai ele vai dividir o valor dos elementos do Array por 7, será exibido: [ 1, 2, 3, 4, 5 ]

// Exemplo 2: criando um novo array com todos elementos concatenados neles, enquanto o valor dos números está sendo multiplicado.
let numeros6 = [50, 70, 90, 100, 120]; // Criei um Array em números.

console.log(numeros6.flatMap((x) => [[x * 10]])); // Aqui eu aplico o método .flatmap(), que vai multiplicar o valor dos elementos do Array por 10 
//e além disso, vai concatenar cada elemento do Array, será exibido: [ [ 500 ], [ 700 ], [ 900 ], [ 1000 ], [ 1200 ] ]

// splice()
// O método agora é o .splice(), ele pode ser usado para adicionar, excluir  e substituir elementos em um array a partir de uma posição definida.
// Exemplo 1: Adicionando elementos com splice() string de letras;
let spiderverse = ['homem aranha', 'duende verde', 'venom', 'mary jane']; // Criei um Array de letras para aplicar o .splice() nele.

spiderverse.splice(1, 0, 'miles morales', 'gwen stacy'); // Apliquei o método splice, que em teoria, vai adicionar os elementos 'miles morales' e 'gwen stacy' no Array spiderverse.

console.log(spiderverse); // A exibição após a adição fica igual a: ['homem aranha', 'miles morales', 'gwen stacy', 'duende verde', 'venom', 'mary jane']

// Exemplo 2: Adicionando elementos com splice() com  números;
let numeros7 = [10, 20, 30, 70, 80, 90, 100]; // Criei um Array em números.

numeros7.splice(3, 0, 40, 50, 60); // Apliquei o método splice, que em teoria, vai adicionar os elementos 40, 50 e 60 no Array na posição que eu gostaria que ele ficasse.

console.log(numeros7); // A exibição dele será: [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

// Exemplo 3: Excluindo elementos com splice() string de letras;
let spiderverse2 = ['homem aranha 2099', 'peni parker', 'Lyla', 'punk-aranha']; // Criei um Array de letras para aplicar o .splice() nele.

spiderverse2.splice(2, 3); // Apliquei o método splice, que em teoria, vai excluir os elementos que estão no index 2 e 3, que seria a 'Lyla' e o 'punk-aranha'

console.log(spiderverse2); // Após excluir esses elementos, a exibição é: [ 'homem aranha 2099', 'peni parker' ]

//Exemplo 4: Excluindo elementos com splice() string de números;
let numeros8 = [20, 25, 30, 35, 39]; // Criei um Array em números.

numeros8.splice(4, 3); // Apliquei o método splice, que em teoria, vai excluir o elemento que está no index 4, que é o elemento 39.

console.log(numeros8); // Após excluir esse elemento, a exibição do Array é: [ 20, 25, 30, 35 ]

// Exemplo 5: Substituindo elementos com splice(); 

let spiderverse3 = ['doutor octopus', 'misterio', 'mancha', 'carnificina']; // Criei um Array de letras para aplicar o splice()

spiderverse3.splice(2, 1, 'grito'); // Aqui eu estou aplicando o splice para substituir o elemento 'mancha', pelo elemento 'grito'
//  e para isso eu precisei adicionar o index do elemento que será substituido para ocorrer a substituição.

console.log(spiderverse3); // Após substituir um elemento pelo outro, a exibição é: [ 'doutor octopus', 'misterio', 'grito', 'carnificina' ]

// Exemplo 6: Substituindo elementos com splice(); 

let numeros9 = [4, 8, 12, 15, 20]; // Criei um Array em números.

numeros9.splice(3, 1, 16); //  // Aqui eu estou aplicando o splice para substituir o elemento "15" pelo elemento "16" (que será adicionado) 
//  e para isso eu precisei adicionar o index do elemento que será substituido para ocorrer a substituição.

co6nsole.log(numeros9); // Após substituir um elemento pelo outro, a exibição é: [ 4, 8, 12, 16, 20 ]