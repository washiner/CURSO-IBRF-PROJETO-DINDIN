const nav = document.querySelector(".nav"); // Seleciona o elemento com a classe "nav"
const btnMenu = document.querySelector(".btn-menu"); // Seleciona o elemento com a classe "btn-menu"
const menu = document.querySelector(".menu"); // Seleciona o elemento com a classe "menu"

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault(); // Previne o comportamento padrão do evento touchstart
    /* event.stopPropagation(); REMOVA ESSA LINHA*/ // Comentário sugerindo a remoção da linha de código que impede a propagação do evento
    nav.classList.toggle("active"); // Adiciona ou remove a classe "active" do elemento selecionado anteriormente
    handleClickOutside(menu, () => { // Chama a função "handleClickOutside" passando o elemento selecionado anteriormente e uma função como argumentos
        nav.classList.remove("active"); // Remove a classe "active" do elemento "nav"
        setAria(); // Chama a função "setAria"
    });
    setAria(); // Chama a função "setAria"
    console.log("Botao"); // Imprime uma mensagem no console
}

console.log("Botao1"); // Imprime uma mensagem no console

function handleClickOutside(targetElement, callback) {
    const html = document.documentElement; // Seleciona o elemento "html"

    function handleHTMLClick(event) {
        if (!targetElement.contains(event.target)) { // Verifica se o elemento clicado está dentro do elemento "targetElement"
            targetElement.removeAttribute("data-target"); // Remove o atributo "data-target" do elemento "targetElement"
            html.removeEventListener("click", handleHTMLClick); // Remove o event listener para o evento "click" no elemento "html"
            html.removeEventListener("touchstart", handleHTMLClick); // Remove o event listener para o evento "touchstart" no elemento "html"
            callback(); // Chama a função "callback"
            console.log("html"); // Imprime uma mensagem no console
        }
    }
    if (!targetElement.hasAttribute("data-target")) { // Verifica se o elemento "targetElement" possui o atributo "data-target"
        html.addEventListener("click", handleHTMLClick); // Adiciona um event listener para o evento "click" no elemento "html"
        html.addEventListener("touchstart", handleHTMLClick); // Adiciona um event listener para o evento "touchstart" no elemento "html"
        targetElement.setAttribute("data-target", ""); // Define o valor do atributo "data-target" como vazio no elemento "targetElement"
    }
    console.log("Botao2"); // Imprime uma mensagem no console
}

function setAria() {
    const isActive = nav.classList.contains("active"); // Verifica se o elemento "nav" possui a classe "active" e atribui o resultado à variável "isActive"
    btnMenu.setAttribute("aria-expanded", isActive); // Define o valor do atributo "aria-expanded" do elemento "btnMenu" como o valor da variável "isActive"
    if (isActive) { // Verifica se a variável "isActive" é verdadeira
        btnMenu.setAttribute("aria-label", "Fechar Menu"); // Define o valor do atributo "aria-label" do elemento "btnMenu" como "Fechar Menu"
        console.log("Botao3"); // Imprime uma mensagem no console
    } else {
        btnMenu.setAttribute("aria-label", "Abrir Menu"); // Define o valor do atributo "aria-label" do elemento
    }
}