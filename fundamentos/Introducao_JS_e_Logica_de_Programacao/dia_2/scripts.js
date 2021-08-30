let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (const number of numbers) {
  console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

const somador = (total, i) => total + i;
console.log(numbers.reduce(somador));

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = numbers.reduce(somador) / numbers.length;

console.log(media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let biggestNumber = Number.MIN_VALUE

for (let index = 0; index < numbers.length; index += 1) {
  let numb = numbers[index];
  if (biggestNumber < numb)
    biggestNumber = numb
}
console.log(biggestNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddNumbers = []

for (let index = 0; index < numbers.length; index += 1) {
  let numb = numbers[index];
  if (numb % 2 != 0) {
    oddNumbers.push(numb)
  } 
} if (oddNumbers.length < 1) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(oddNumbers);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let smallestNumber = Number.MAX_VALUE

for (let index = 0; index < numbers.length; index += 1) {
  let numb = numbers[index];
  if (smallestNumber > numb)
    smallestNumber = numb
}
console.log(smallestNumber);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let oneTo
let oneTo25 = []

for (let index = 1; oneTo25.length < 25; index += 1) {
  oneTo = index;
  oneTo25.push(oneTo)
} console.log(oneTo25);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

let forTwo25 = []
for (let index = 0; index < oneTo25.length; index += 1) {
  let div25 = oneTo25[index];
  div25 = div25 / 2
  forTwo25.push(div25)
}
console.log(forTwo25);