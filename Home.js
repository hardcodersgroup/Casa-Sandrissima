// Seleciona todos os slides (imagem + texto)
const slides = document.querySelectorAll('.slide');
let indice = 0;

// Troca automática dos slides
setInterval(() => {
  slides[indice].classList.remove('ativo');
  indice = (indice + 1) % slides.length;
  slides[indice].classList.add('ativo');
}, 3500); // muda a cada 3,5 segundos

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

