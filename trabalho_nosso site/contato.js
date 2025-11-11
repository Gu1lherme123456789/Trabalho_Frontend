document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  const msgSucesso = document.getElementById("mensagemSucesso");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o recarregamento da página

    // Validação simples
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Exibe a mensagem de sucesso
    msgSucesso.style.display = "block";

    // Limpa os campos
    form.reset();

    // Oculta a mensagem após 5 segundos
    setTimeout(() => {
      msgSucesso.style.display = "none";
    }, 5000);
  });
});
