const newEmployees = (emailer) => {
  const employees = {
    id1: emailer('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: emailer('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: emailer('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const emailer = (nome) => {
  let email = nome.toLowerCase().split(/\s/).join('_')
  return { nome, email: `${email}@betrybe.com` }
}

console.log(newEmployees(emailer));

const telesena = (numeroApostado, verificador) => {
  const numeroAleatorio = Math.round(Math.random() * 5)
  let result = verificador(numeroApostado, numeroAleatorio)
  return result
}

const verificador = (minhaFezinha, numeroSorteado) => minhaFezinha !== numeroSorteado ? 'Tente novamente' : 'Parabens, você ganhou'

console.log(telesena(5, verificador));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const provao = (gabarito, respostas, callback) => {
  return callback(gabarito,respostas)
}

const checa = (comparador, comparado) => {
  let result = 0
  let respostasEmBranco = 0
  for (let index = 0; index < comparador.length; index += 1) {
    if (comparado[index] === 'N.A') {
      respostasEmBranco += 1
    } else if (comparador[index] === comparado[index]) {
      result += 10
    } else {
      result -= 5
    }
  }
  result = result.toString().split('').join(',')
  const analise = [result, respostasEmBranco]
  return analise[0]
}

console.log(provao(RIGHT_ANSWERS, STUDENT_ANSWERS, checa));