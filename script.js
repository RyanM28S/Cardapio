function proximaPagina() {
    window.location.href = "pratos.html";
}
function proximaPagina2() {
    window.location.href = "bebidas.html";
}
function paginaAnterior() {
    window.location.href = "index.html";
}
function paginaAnterior2() {
    window.location.href = "pratos.html";
}
function proximaPagina0() {
    window.location.href = "index.html";
}
function paginaAnterior0() {
    window.location.href = "capa.html";
}
function proximaPagina3() {
    window.location.href = "capa.html";
}
function salvarItem(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
function irCarrinho() {
window.location.href = "Carrinho.html";
}