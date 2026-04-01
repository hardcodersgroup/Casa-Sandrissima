function abrirLogin(tipo) {
  const modal = document.getElementById('loginModal');
  const usuario = document.getElementById('usuario');
  const senha = document.getElementById('senha');

  // Limpa os campos ao abrir o modal
  usuario.value = '';
  senha.value = '';

  modal.style.display = 'flex';
  document.getElementById('modalTitulo').innerText = "Login - " + tipo;
}

function fazerLogin() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (usuario && senha) {
    alert(`Bem-vindo(a), ${usuario}!`);
    document.getElementById('loginModal').style.display = 'none';
  } else {
    alert("Por favor, preencha usuário e senha.");
  }
}

// Fechar modal clicando fora da caixa
window.onclick = function (event) {
  const modal = document.getElementById('loginModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

