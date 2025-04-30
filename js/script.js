const modal = document.getElementById('popupModal');
const btn = document.getElementById('btnCadastrar');

btn.onclick = () => {
  modal.style.display = 'block';
};

function fecharPopup() {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target === modal) {
    fecharPopup();
  }
};

// Fecha ao receber mensagem do iframe
window.addEventListener('message', (event) => {
  if (event.data === 'fecharPopup') {
    fecharPopup();
  }
});

function salvarCadastro() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const nascimentoISO = document.getElementById('nascimento').value;

  // Formatar data para DD/MM/YYYY
  const [ano, mes, dia] = nascimentoISO.split('-');
  const nascimentoBR = `${dia}/${mes}/${ano}`;

  const dados = {
    nome: nome,
    email: email,
    nascimento: nascimentoBR
  };

  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'cadastro.json';
  link.click();
}