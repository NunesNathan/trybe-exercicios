const body = document.getElementsByTagName('body')[0];
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);
const main = document.createElement('main');
main.classList += 'main-content';
body.appendChild(main);
const secCenterContent = document.createElement('section');
secCenterContent.classList += 'center-content';
main.appendChild(secCenterContent);
const p = document.createElement('p');
p.innerText = 'trybe'
secCenterContent.appendChild(p);
const secLeftContent = document.createElement('section');
secLeftContent.classList += 'left-content';
main.appendChild(secLeftContent);
const secRightContent = document.createElement('section');
secRightContent.classList += 'right-content';
main.appendChild(secRightContent);
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.classList += 'small-image';
secLeftContent.appendChild(img);
const extenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const ul = document.createElement('ul');
secRightContent.appendChild(ul);
for (let index = 0; index < 10; index += 1) {
  let i = extenso[index];
  const li = document.createElement('li');
  li.innerText = i;
  ul.appendChild(li);
}
for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  h3.innerText = index;
  h3.classList += 'desciption'
  main.appendChild(h3);
}
h1.classList += 'title';
main.removeChild(secLeftContent);
secRightContent.style.marginRight = 'auto';
secCenterContent.style.backgroundColor = 'green'
ul.lastChild.remove()
ul.lastChild.remove()