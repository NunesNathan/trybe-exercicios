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

listSkills(student1);
listSkills(student2);
