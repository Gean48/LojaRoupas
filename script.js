let carrinho = [];

function adicionarCarrinho(produto) {
  carrinho.push(produto);
  alert("Produto adicionado!");
  enviarWhatsApp();
}

function enviarWhatsApp() {
  let mensagem = "Olá! Gostaria de comprar:\n\n";
  carrinho.forEach(item => {
    mensagem += "- " + item + "\n";
  });

  let numero = "5599999999999"; // coloque seu WhatsApp
  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(url, "_blank");
}

function filtrarCategoria(categoria) {
  let produtos = document.querySelectorAll(".produto");

  produtos.forEach(produto => {
    if (categoria === "todos" || produto.classList.contains(categoria)) {
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  });
}
