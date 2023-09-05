const produtos = [
    {
    id:"1",
    nome:"Informática para internet: Interfaces web 2",
    prof:"Prof. Kelly",
    preco_de: 80,
    preco_por: 50,
    descricao:"Curso de JavaScript",
    img:".assets/1.png",
},
{
    id:"2",
    nome:"Gestão de Conteúdo Web 2",
    prof:"Prof. Kelly",
    preco_de: 80,
    preco_por: 50,
    descricao:"Curso de JavaScript",
    img:".assets/3.png", 
},
];
function renderizarProdutos() {
    let html = "";
    for (let i = 0; i < produtos.length; i++) {
        html = html + criaProduto(produtos[i], i); 
    }
    return html;
}

function criaProduto(produto, index) {
    return `
    <div class="curso">
        <img class='inicio' tittle="t" src="${produto.img}" />
        <div class="curso-info">
        <h4>${produto.nome}</h4>
        <p>${produto.prof}</p>
        <p>${produto.descricao}</p>
    </div>
        <div class="curso-preco">
            <span class="preco-de">R$${produto.preco_de}</span>
            <span class="preco-por">R$${produto.preco_por}</span>
    <button class="btncar btn-add" data-index="${index}"></button>
        </div>
    </div>
    `;
}
const container = document.querySelector("#container")
container.innerHTML= renderizarProdutos();