window.onload = function start() {
  mkOptions()
}
let select = document.querySelector('select');
let a;
let stateName;

const lista = {
'Acre': '(AC)',
'Alagoas': '(AL)',
'Amapá': '(AP)',
'Amazonas': '(AM)',
'Bahia': '(BA)',
'Ceará': '(CE)',
'Distrito Federal': '(DF)',
'Espírito Santo': '(ES)',
'Goiás': '(GO)',
'Maranhão': '(MA)',
'Mato Grosso': '(MT)',
'Mato Grosso do Sul': '(MS)',
'Minas Gerais': '(MG)',
'Pará': '(PA)',
'Paraíba': '(PB)',
'Paraná': '(PR)',
'Pernambuco': '(PE)',
'Piauí': '(PI)',
'Rio de Janeiro': '(RJ)',
'Rio Grande do Norte': '(RN)',
'Rio Grande do Sul': '(RS)',
'Rondônia': '(RO)',
'Roraima': '(RR)',
'Santa Catarina': '(SC)',
'São Paulo': '(SP)',
'Sergipe': '(SE)',
'Tocantins': '(TO)',
}

function mkOptions() {
  for (const key in lista) {
    const option = document.createElement('option');
    option.innerText = key;
    select.appendChild(option);
  }
}

const date = document.querySelector('.date');
date.addEventListener('change', () => {
  const dateSplit = date.value.split(/(\d)/);
  console.log(dateSplit);
  if (dateSplit[1] + dateSplit[3] <= 31 && dateSplit[5] + dateSplit[7] <= 12 && dateSplit[4] == '/' && dateSplit[8] == '/') {
  } else {
    alert('formato de data de início errado!');
  }
});

const submit = document.querySelector('button')
submit.addEventListener
