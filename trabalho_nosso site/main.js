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