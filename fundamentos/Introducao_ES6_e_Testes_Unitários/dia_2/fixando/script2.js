const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = student => {
  const arr = Object.keys(student);
  for (const key in arr) {
    console.log(`${arr[key]}, Nível: ${student[arr[key]]}`);
  }
}

for (const key in student1) {
  console.log(`${student1[key]}, Nível: ${student1[key]}`);
}
console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);