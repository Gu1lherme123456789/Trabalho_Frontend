document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  // Função de filtragem
  searchInput.addEventListener("input", () => {
    const termo = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
      const nomeProduto = card.querySelector(".nome-produto").textContent.toLowerCase();

      if (nomeProduto.includes(termo) || termo === "") {
        card.style.display = "block"; // mostra o card
      } else {
        card.style.display = "none"; // esconde o card
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const botoesComprar = document.querySelectorAll(".btn-comprar");
    const contador = document.querySelector(".contador");
    const iconeCarrinho = document.querySelector(".carrinho");

    // Funções auxiliares
    const getCarrinho = () => JSON.parse(localStorage.getItem("carrinho_compwin") || "[]");
    const salvarCarrinho = (c) => localStorage.setItem("carrinho_compwin", JSON.stringify(c));

    function atualizarContador() {
        const carrinho = getCarrinho();
        const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
        contador.textContent = total;
    }

    // Clique para adicionar ao carrinho
    botoesComprar.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".card");
            const nome = card.querySelector(".nome-produto").textContent;
            const preco = parseFloat(card.querySelector(".preco").textContent.replace("R$", "").replace(",", "."));
            const imagem = card.querySelector(".produto-img").src;
            const quantidade = 1; // pode adicionar input depois se quiser

            let carrinho = getCarrinho();
            const item = carrinho.find(i => i.nome === nome);

            if (item) {
                item.quantidade += quantidade;
            } else {
                carrinho.push({ nome, preco, imagem, quantidade });
            }

            salvarCarrinho(carrinho);
            atualizarContador();

            contador.style.transform = "scale(1.3)";
            setTimeout(() => contador.style.transform = "scale(1)", 200);
        });
    });

    // Clique no ícone do carrinho → verifica login
    iconeCarrinho.addEventListener("click", () => {
        const usuario = JSON.parse(localStorage.getItem("usuario_logado"));
        if (usuario) {
            window.location.href = "carrinho.html";
        } else {
            window.location.href = "login.html";
        }
    });

    atualizarContador();
});