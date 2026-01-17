let carrinho = [];

function adicionarCarrinho(nome, preco, imagem) {
  carrinho.push({ nome, preco, imagem });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  const totalEl = document.getElementById("total");
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
    total += item.preco;
  });

  totalEl.textContent = "Total: R$ " + total.toFixed(2);
}

document.getElementById("enviarWhatsapp").onclick = function () {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let mensagem = "🛍️ *Pedido da Loja*%0A%0A";
  let total = 0;

  carrinho.forEach((item, i) => {
    mensagem += `📦 Produto ${i + 1}: ${item.nome}%0A`;
    mensagem += `💰 Valor: R$ ${item.preco.toFixed(2)}%0A`;
    mensagem += `🖼️ Foto: ${item.imagem}%0A%0A`;
    total += item.preco;
  });

  mensagem += `🧾 *Total: R$ ${total.toFixed(2)}*`;

  const telefone = "5599999999999"; // SEU WHATSAPP
  const url = `https://wa.me/${telefone}?text=${mensagem}`;
  window.open(url, "_blank");
};
