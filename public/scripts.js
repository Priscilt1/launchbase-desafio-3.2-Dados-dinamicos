// a DOM ve o html como objeto
// querySelector tem como funcao selecionar o modal-overlay nesse caso e vai add na variavel 
const modalOverlay = document.querySelector('.modal-overlay')

// pegando todos os elementos da classe card
// querySelectorAll pega uma colecao de objeto iguais, do mesmo valor
const cards = document.querySelectorAll('.card')

// para maximizar
const modal = document.querySelector(".modal")

// criando laco de repeticao
for (let card of cards) {
    // o addEventListener ouve um evento
    card.addEventListener("click", function(){
        const postId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}


// fechando o modal
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");
    // para quando fechar tirar tambem a opcao de maximizar, permitindo abrir sem estar maximizado
    modal.classList.remove("maximized")
    modalOverlay.querySelector("iframe").src = ""
})


// maximizando o modal
document.querySelector(".maximize-modal").addEventListener("click", function() {
    if (modal.classList.contains("maximized")) {
        modal.classList.remove("maximized")
    } else {
        modal.classList.add("maximized")
    }
})