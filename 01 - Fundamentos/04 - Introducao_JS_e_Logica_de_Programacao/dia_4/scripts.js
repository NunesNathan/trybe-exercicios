// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem vinda, ", info.personagem + "!");

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = "Sim"

console.log(info.recorrente);

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let key in info) {
  console.log(key);
}

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (const key in info) {
  console.log(info[key]);
}

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
console.log('///////////////////')

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "Sim"
};

for (let key in info) {
  if (key === 'recorrente' &&
    info[key] === 'Sim' &&
    info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}


////////////////////////////////////////////////////////////////
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindrome(eounaoe) {
  let pali = eounaoe.split("")
  let drome = pali.reverse()
  drome = drome.join("")
  if (eounaoe == drome) {
    return true
  } else {
    return false
  }
}


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxNum(arr) {
  let max = Math.max(...arr)
  let theMaxNum = arr.indexOf(max)
  return theMaxNum
}


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minNum(arr) {
  let min = Math.min(...arr)
  let theMinNum = arr.indexOf(min)
  return theMinNum
}

console.log(minNum([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestName(arr) {
  let biggest = ""
  for (const key in arr) {
    if (arr[key].length > biggest.length) {
    biggest = arr[key]
  } 
} return biggest;
}

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function count(arr) {
  arr.sort()
  let result = []
  for (let y in arr) {
    let resultTest = []
    resultTest.push(arr[y])
  for (const key in arr) {
    if (arr[key] == resultTest[0]) {
      resultTest.push(arr[key])
    } else if (key == (arr.length - 1) && resultTest.length > result.length){
      result = resultTest
    }
    }
  }return result[0]
 }