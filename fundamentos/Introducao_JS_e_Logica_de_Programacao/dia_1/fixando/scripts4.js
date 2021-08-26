// const comida = 'pão na chapa';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

const currentHour = 12
let message = ""
if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!"
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado"
}

console.log(message);


////////////////////////////////////////////////////////////////////////


// const bebidaPrincipal = 'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

let weekDay = "quarta-feir";
switch (weekDay) {
  case "segunda-feira":
  case "terça-feira":
  case "quarta-feira":
  case "quinta-feira":
  case "sexta-feira":
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
    break;

  case "sábado":
  case "domingo":
    console.log("FINALMENTE, descando merecido UwU");
    break;
  default:
    console.log("digitou errado, amigão!");
}


///////////////////////////////////////////////////////////////////////////

console.log(!(2 + 2) === 4);