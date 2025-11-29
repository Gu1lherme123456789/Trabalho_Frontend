function adicionarCarrinho() {
    const produto = {
        nome: "Mouse Gamer RGB",
        preco: 199.90,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl92Y_-uEOKkZ77OVavJgXZ_6aKFSKHRwpLQ&s",
        quantidade: 1
    };

    let carrinho = JSON.parse(localStorage.getItem("carrinho_compwin") || "[]");

    const existente = carrinho.find(item => item.nome === produto.nome);

    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem("carrinho_compwin", JSON.stringify(carrinho));

    // 👉 Vai direto pro carrinho
    window.location.href = "carrinho.html";
}
