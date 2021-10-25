// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'morango', 'amora'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite em pó', 'leite condensado', 'açucar'];

const fruitSalad = (fruit, additional) => {
  const result = [ ...fruit, ...additional ]
  return result
};

console.log(fruitSalad(specialFruit, additionalItens));