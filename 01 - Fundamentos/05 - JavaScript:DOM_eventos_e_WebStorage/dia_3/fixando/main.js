const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const ul = document.querySelector('ul');

const toTech = () => {
  const verifyTech = document.querySelector('.tech');
  verifyTech.classList.remove('tech');
  ul.addEventListener('click', (e) => {
    const oldTech = document.querySelector('.tech');
    if (verifyTech !== null) {
      e.target.classList.add('tech');
    }
    oldTech.classList.remove('tech');
  });
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const editingTech = () => {
  input.addEventListener('input', () => {
    document.querySelector('.tech').innerText = input.value;
    if (input.value === '') {
      document.querySelector('.tech').innerText = 'Aqui está uma das tecnologias que mais gostei.';
    }
  });
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
const redirected = () => {
  ul.addEventListener('dblclick', () => {
    window.open('https://nunesnathan.github.io/', '_blank');
  });
}
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const meuTopOver = () => {
  const h3 = document.querySelector('h3');
h3.addEventListener('mouseover', () => {
  h3.style.color = '#777777'
});
h3.addEventListener('mouseout', () => {
  h3.style.color = 'white'
});}
// Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  // event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

window.onload = () => {
  toTech();
  editingTech();
  redirected();
  meuTopOver();
} 