let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

for (const key in names) {
  console.log("Olá,", names[key] + "! =D");
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
console.log("///////////////////////////");
for (const key in car) {
  console.log(key+ ":", car[key]);
}