// Inicializa a quantidade de vagas a partir do localStorage ou usa 3 como padrão
let vagasLaura = parseInt(localStorage.getItem('vagasLaura')) || 3;
let vagasMark = parseInt(localStorage.getItem('vagasMark')) || 3;
let vagasSophie = parseInt(localStorage.getItem('vagasSophie')) || 3;
let vagasDylan = parseInt(localStorage.getItem('vagasDylan')) || 3;
let vagasEmma = parseInt(localStorage.getItem('vagasEmma')) || 3;
let vagasJulia = parseInt(localStorage.getItem('vagasJulia')) || 3;
let vagasBrian = parseInt(localStorage.getItem('vagasBrian')) || 3;
let vagasOlivia = parseInt(localStorage.getItem('vagasOlivia')) || 3;

function atualizarVagas(personagem, vagas) {
  localStorage.setItem(`vagas${personagem}`, vagas.toString());
}

function showModal(character) {
  const modal = document.getElementById('myModal');
  const modalText = document.getElementById('modalText');

  let vagas;
  let vagasKey;

  switch (character) {
    case 'Laura/Mario':
      vagas = vagasLaura;
      vagasKey = 'vagasLaura';
      break;
    case 'Mark/Alexa':
      vagas = vagasMark;
      vagasKey = 'vagasMark';
      break;
    case 'Sophie/Julio':
      vagas = vagasSophie;
      vagasKey = 'vagasSophie';
      break;
    case 'Dylan':
      vagas = vagasDylan;
      vagasKey = 'vagasDylan';
      break;
    case 'Emma/Apolo':
      vagas = vagasEmma;
      vagasKey = 'vagasEmma';
      break;
    case 'Julia/Jack':
      vagas = vagasJulia;
      vagasKey = 'vagasJulia';
      break;
    case 'Brian/Mariana':
      vagas = vagasBrian;
      vagasKey = 'vagasBrian';
      break;
    case 'Olivia/Kenji':
      vagas = vagasOlivia;
      vagasKey = 'vagasOlivia';
      break;
    default:
      vagas = 0;
  }

  if (vagas > 0) {
    vagas--;
    localStorage.setItem(vagasKey, vagas.toString());

    switch (character) {
      case 'Laura/Mario':
        vagasLaura = vagas;
        document.getElementById('lauraVagas').textContent = `Vagas: ${vagasLaura}`;
        break;
      case 'Mark/Alexa':
        vagasMark = vagas;
        document.getElementById('markVagas').textContent = `Vagas: ${vagasMark}`;
        break;
      case 'Sophie/Julio':
        vagasSophie = vagas;
        document.getElementById('sophieVagas').textContent = `Vagas: ${vagasSophie}`;
        break;
      case 'Dylan':
        vagasDylan = vagas;
        document.getElementById('dylanVagas').textContent = `Vagas: ${vagasDylan}`;
        break;
      case 'Emma/Apolo':
        vagasEmma = vagas;
        document.getElementById('emmaVagas').textContent = `Vagas: ${vagasEmma}`;
        break;
      case 'Julia/Jack':
        vagasJulia = vagas;
        document.getElementById('juliaVagas').textContent = `Vagas: ${vagasJulia}`;
        break;
      case 'Brian/Mariana':
        vagasBrian = vagas;
        document.getElementById('brianVagas').textContent = `Vagas: ${vagasBrian}`;
        break;
      case 'Olivia/Kenji':
        vagasOlivia = vagas;
        document.getElementById('oliviaVagas').textContent = `Vagas: ${vagasOlivia}`;
        break;
    }

    modalText.textContent = `Você foi inscrito no personagem ${character}. Por favor, tire print desta tela para provar que você está inscrito!`;
    modal.style.display = 'block';
  } else {
    modalText.textContent = `Vagas esgotadas para o personagem ${character}.`;
    modal.style.display = 'block';
  }
}

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

const modalOkBtn = document.getElementById('modalOkBtn');
modalOkBtn.addEventListener('click', closeModal);
 // Teste de escrita
localStorage.setItem('teste', 'Isso é um teste');

// Teste de leitura
const teste = localStorage.getItem('teste');
console.log(teste);  // Deve imprimir "Isso é um teste" no console
