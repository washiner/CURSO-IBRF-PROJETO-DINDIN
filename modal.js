// Recebe o modal
var modal = document.getElementById("myModal");
// Recebe o botão que abre o modal
var btn = document.getElementById("myBtn");
// <span> para fechar o modal
var span = document.getElementsByClassName("close")[0];
// block modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando clicar (x), fecha modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando clicar fora do modal, ele fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}