// Encontre os elementos dos botões
var button5 = document.querySelector('.curso-text5');
var button06 = document.querySelector('.curso-text06');
var button007 = document.querySelector('.curso-text007');

// Encontre os elementos dos modais
var modal5 = document.getElementById('modal5');
var modal06 = document.getElementById('modal06');
var modal007 = document.getElementById('modal007');

// Encontre os elementos para fechar os modais
var closeButtons = document.querySelectorAll('.modal .close');
var modalButtons = document.querySelectorAll('.modal .modal-button');

// Adicione os ouvintes de evento de clique para os botões
button5.addEventListener('click', openModal5);
button06.addEventListener('click', openModal06);
button007.addEventListener('click', openModal007);

// Adicione os ouvintes de evento de clique para os elementos de fechamento e botões nos modais
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', closeModal);
});
modalButtons.forEach(function (modalButton) {
  modalButton.addEventListener('click', closeModal);
});

// Função para abrir o modal curso-text5
function openModal5() {
  modal5.style.display = 'block';
}

// Função para abrir o modal curso-text06
function openModal06() {
  modal06.style.display = 'block';
}

// Função para abrir o modal curso-text007
function openModal007() {
  modal007.style.display = 'block';
}

// Função para fechar os modais
function closeModal() {
  modal5.style.display = 'none';
  modal06.style.display = 'none';
  modal007.style.display = 'none';
}