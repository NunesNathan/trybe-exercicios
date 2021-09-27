const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addEntrada = (objAlvo, chave, valor) => {
  objAlvo[chave] = valor
  return objAlvo
}

console.log(addEntrada(lesson2, 'turno', 'noite'));

const keys = (obj) => {
  return Object.keys(obj)
}

console.log(keys(lesson1));

const length = (obj) => {
  const arr = Object.entries(obj)
  return arr.length
}

console.log(length(lesson1));

const values = (obj) => {
  return Object.values(obj)
}

console.log(values(lesson1));

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 })
console.log(allLessons);

const totalAlunos = (obj) => {
  let total = 0;
  const arr = Object.keys(obj);
  for (index in arr) {
    total += obj[arr[index]].numeroEstudantes;
  }
  return total;
};
console.log(totalAlunos(allLessons));

const valueOfKey = (obj, key) => {
  const value = Object.values(obj)[key]
  return value
}
console.log(valueOfKey(lesson1, 0));

const verify = (obj, key, value) => {
  const objectEntries = Object.entries(obj)
  let resultado = false
  for (let index = 0; index < objectEntries.length; index += 1) {
    // resultado = (objectEntries[index][0] === key && objectEntries[index][1] === value) ? true : false
    if (objectEntries[index][0] === key && objectEntries[index][1] === value) {
      resultado = true
    }
  }
  return resultado
}

console.log(verify(lesson2, 'professor', 'Carlos'));

console.log(verify(lesson3, 'turno', 'noite'));
console.log(verify(lesson3, 'materia', 'Maria Clara'));


