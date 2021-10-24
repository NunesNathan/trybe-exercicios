// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 10 42 57 60 62 57 113
//   return result + number;
// };
// const sumNumbers = numbers.reduce(getSum, 1);
// console.log(sumNumbers); // 123

const sum = (a, b) => a + b;
const sum1 = (a, b) => ((b % 2 === 0) ? a + b : a);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const fillEven = (arr, callback) => {
  let filtredArr = arr.filter((index) => {
    return index % 2 === 0
  })
  return filtredArr.reduce(callback)
}

const fillEven1 = (arr, callback) => arr.reduce(callback);

console.log(fillEven(numbers, sum));
console.log(fillEven1(numbers, sum1));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];
const highest = (a, b) => (a > b) ? a : b;

const highScores = (list) => list.map((who) => (
    { [`${who.nome} ${who.sobrenome}`]: `${who.materias.reduce((a, b) => (a.nota > b.nota) ? a : b).name}`}
))

console.log(highScores(estudantes));