const eu = document.getElementById('elementoOndeVoceEsta');
const pai = document.querySelector('#pai');
const meupai = eu.parentElement
pai.style.color = 'black';
const apolo = eu.children[0];
apolo.innerText = 'aqui está Apolo';
const kamila = pai.children[0];
const irma = eu.previousElementSibling;
const atencao = eu.nextSibling;
const outraIrma = eu.nextElementSibling;
const kelly = pai.lastElementChild.previousElementSibling;

//////////////

const outroFilho = document.createElement('section');
pai.appendChild(outroFilho)
const isaac = document.createElement('section');
eu.appendChild(isaac)
const neto = document.createElement('section');
neto.id = 'meuneto'
apolo.appendChild(neto)
const meuNeto = document.getElementById('meuneto')
meuNeto.parentNode.parentNode.nextElementSibling


//////////////////////

const avo = document.querySelector('#paiDoPai')
const algoDoMadara = (patriarca) => {
  for (let index = patriarca.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = patriarca.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
  } const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
  segundoEUltimoFilhoDoFilho.remove();
}

const planoDoItachi = () => {
  algoDoMadara(pai);
}

window.onload = () => {
  planoDoItachi();
}
