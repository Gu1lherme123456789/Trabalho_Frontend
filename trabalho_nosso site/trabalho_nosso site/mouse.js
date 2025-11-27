

document.addEventListener("DOMContentLoaded", function () {
    atualizarCarrinho();
});


function adicionarCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

   
    carrinho.push(produto);

 
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

   
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let contador = document.querySelector(".contador");

    if (contador) {
        contador.textContent = carrinho.length;
    }
}

