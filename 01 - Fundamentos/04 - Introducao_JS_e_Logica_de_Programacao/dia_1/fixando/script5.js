let statusProcessoSeletivo = 'reprovada';

switch (statusProcessoSeletivo) {
  case 'aprovada':
    console.log('Aprovada! :D');
    break;
  case 'lista':
    console.log('Na lista!');
    break;
  case 'reprovada':
    console.log('Reprovada! :/');
    break;
  default:
    console.log('não se aplica');
    break;
}

