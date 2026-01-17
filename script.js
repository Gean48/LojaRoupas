// CARRINHO
let carrinho=[];
function adicionarCarrinho(nome,preco){
  let item=carrinho.find(i=>i.nome===nome);
  if(item)item.qtd+=1;
  else carrinho.push({nome,preco,qtd:1});
  atualizarCarrinho();
}
function atualizarCarrinho(){
  const div=document.getElementById('itensCarrinho');
  div.innerHTML='';
  let total=0;
  carrinho.forEach(item=>{
    div.innerHTML+=`<p>${item.qtd}x ${item.nome} - R$ ${(item.preco*item.qtd).toFixed(2)}</p>`;
    total+=item.qtd;
  });
  document.getElementById('contadorCarrinho').innerText=`🛒 ${total}`;
}
document.getElementById('enviarWhatsapp').addEventListener('click',()=>{
  if(carrinho.length===0){alert("Seu carrinho está vazio!");return;}
  let mensagem=carrinho.map(p=>`${p.qtd}x ${p.nome} - R$ ${(p.preco*p.qtd).toFixed(2)}`).join('%0A');
  let whatsappLink=`https://wa.me/559999999999?text=${mensagem}`;
  window.open(whatsappLink,"_blank");
});

// SLIDER
let slideIndex=0;
const slides=document.querySelectorAll('.slide');
function showSlide(index){
  const total=slides.length;
  if(index>=total)slideIndex=0;
  if(index<0)slideIndex=total-1;
  document.querySelector('.slides').style.transform=`translateX(-${slideIndex*100}%)`;
}
document.querySelector('.next').addEventListener('click',()=>{slideIndex++;showSlide(slideIndex);});
document.querySelector('.prev').addEventListener('click',()=>{slideIndex--;showSlide(slideIndex);});
setInterval(()=>{slideIndex++;showSlide(slideIndex);},5000);

// FILTRO DE CATEGORIAS
function filtrar(categoria){
  const cards=document.querySelectorAll('#cardsProdutos .card');
  cards.forEach(card=>{
    if(categoria==='todos'||card.getAttribute('data-categoria')===categoria) card.style.display='block';
    else card.style.display='none';
  });
}
filtrar('todos');

// ENDEREÇO EDITÁVEL
function mostrarLocalizacao() {
  const input=document.getElementById('localizacaoUsuario').value;
  const endereco=document.getElementById('enderecoMostrado');
  if(input.trim()===''){alert("Digite algum endereço!");return;}
  endereco.innerText=`Localização: ${input}`;
}
