const fatorial = n => {
  let numeros = []
  let numero;
  if (n < 2) {
    numero = 1
  } else if (n === 0) {
    numero = 1
  } else {
    const multi = (a, b) => a * b;
    for (let index = 1; index <= n; index++) {
      numeros.push(index)
    }
    numero = numeros.reduce(multi)
  }
  return numero
}

console.log(fatorial(0));

const longestWord = str => {
  const string = str.split(' ')
  let palavraGrandona = 'a';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index].length > palavraGrandona.length) {
      palavraGrandona = string[index]
    }
  }
  return palavraGrandona
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))

const exercise3 = () => {
  const body = document.querySelector('body')
  const btn = document.createElement('button')
  const p = document.createElement('p')
  body.appendChild(btn)
  body.appendChild(p)
  const button = document.querySelector('button')
  const paragraph = document.querySelector('p')
  let clickCount = 0
  p.innerText = 0
  button.addEventListener('click', () => {
    clickCount += 1
    p.innerText = clickCount
  });
}

const changeX = (str, toChange) => {
  let asd = /x/gi
  let dsa = str.replace(asd, toChange)
  return dsa
}

console.log(changeX('asdasdasd asd x X xx XX', 'asd'))

const skills = ['Python', 'Java']

const concatenate = (str) => {
  skills.sort()
  return `${str} Minhas principais habilidades são:\n${skills[0]}\n${skills[1]} #goTrybe`
}

console.log(concatenate(changeX('Fala tribo, x aqui!', 'asd')))
