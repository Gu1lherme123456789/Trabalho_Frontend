function adicionarCarrinhoMonitor() {
    const produto = {
        nome: "Monitor Gamer 24\" Samsung T350",
        preco: 749.90,
        imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/254367/xlarge/Monitor-Gamer-Samsung-T350-24-FULL-HD-Tela-Plana-75Hz-5Ms-HDMI-FreeSync-Game-Mode_1759420735.jpg",
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

    // 👉 Redireciona
    window.location.href = "carrinho.html";
}
