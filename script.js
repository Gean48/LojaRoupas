let carrinho = [];

function adicionarCarrinho(produto) {
  carrinho.push(produto);
  alert("Produto adicionado ao carrinho!");
}

function enviarWhatsApp() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  let mensagem = "Olá! Gostaria de comprar:\n\n";
  carrinho.forEach(item => {
    mensagem += "- " + item + "\n";
  });

  let numero = "5599999999999"; // coloque seu WhatsApp
  let link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(link, "_blank");
}

function filtrarCategoria(cat) {
  document.querySelectorAll(".produto").forEach(p => {
    if (cat === "todos" || p.classList.contains(cat)) {
      p.style.display = "flex";
      p.style.flexDirection = "column";
    } else {
      p.style.display = "none";
    }
  });
}
