function pratosPagina() {
    window.location.href = "pratos.html";
}
function bebidasPagina() {
    window.location.href = "bebidas.html";
}
function entradasAnterior() {
    window.location.href = "index.html";
}
function paginaCapa() {
    window.location.href = "capa.html";
}
function sobremesaPagina() {
    window.location.href = "sobremesa.html";
}
function irCarrinho() {
    window.location.href = "Carrinho.html";
}
function salvarItem(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    location.reload();
}

const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const lista = document.getElementById('carrinho-lista');
const totalEl = document.getElementById('total');

if (carrinho.length === 0) {
    lista.innerHTML = "<p>Carrinho vazio</p>";
    totalEl.textContent = "";
} else {
    lista.innerHTML = carrinho.map((item, index) =>
        `<p>${item.nome} - ${item.preco} 
            <button onclick="removerItem(${index})" id ="removerItem">Excluir</button></p>`
    ).join('');

    const total = carrinho.reduce((acc, item) => {
        const valor = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
        return acc + valor;
    }, 0);

    totalEl.textContent = `Total: R$${total.toFixed(2).replace('.', ',')}`;
}
function exportarCarrinhoParaExcel() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
    }
    const ws = XLSX.utils.json_to_sheet(carrinho);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Carrinho");
    XLSX.writeFile(wb, "carrinho.xlsx");
}
function realizarPagamento() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
    }
    localStorage.removeItem('carrinho');
    alert("Pagamento realizado com sucesso!");
    location.reload();
}


document.addEventListener('DOMContentLoaded', function() {
  const mostrarBotao = document.getElementById('mostrarDiv');
  const fecharBotao = document.getElementById('fecharDiv');
  const minhaDiv = document.getElementById('minhaDiv');

  function abrirOverlay() {
    minhaDiv.classList.add('ativo');
  }

  function fecharOverlay() {
    minhaDiv.classList.remove('ativo');
  }

  mostrarBotao.addEventListener('click', abrirOverlay);
  fecharBotao.addEventListener('click', fecharOverlay);

  minhaDiv.addEventListener('click', function(event) {
    if (event.target === minhaDiv) {
      fecharOverlay();
    }
  });
});