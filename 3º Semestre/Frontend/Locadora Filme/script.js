let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
    document.getElementById("modal").style.display = "block"
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function salvarFilme() {
    const capa = document.getElementById("capa").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const lancamento = document.getElementById("lancamento").value;
    const produtora = document.getElementById("produtora").value.trim();
    const genero = document.getElementById("genero").value.trim();

    if(!capa || !nome) {
        alert("Capa e Nome são obrigatórios!");
        return;
    }

    const existe = filmes.find(filme =>filme.nome === nome);

    if (existe) {
        alert("Nome já cadastrado!");
        return;
    }

        const novoFilme = {
            id: Date.now(),
            capa,
            nome,
            lancamento,
            produtora,
            genero
        };
        filmes.push(novoFilme);
        atualizarLocalStorage();
        renderizarTabela();
        fecharModal();
}

function renderizarTabela() {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    filmes.forEach(filme => {
        tabela.innerHTML += `
        <tr>
            <td>${fillme.capa}</td>
            <td>${filme.nome}</td>
            <td>${filme.lancamento}</td>
            <td>${filme.produtora}</td>
            <td>${filme.genero}</td>
            <td><button onclick="excluirFilme(${filme.id})">Excluir</button></td>
            </tr>`
    });
}

function excluirFilme(id) {
    if(!confirm("Deseja realmente excluir?"))
        return;

    filmes = filmes.filter(filme => filme.id !== id)
    atualizarLocalStorage();
    renderizarTabela();
}

function atualizarLocalStorage(){
    localStorage.setItem("filmes",JSON.stringify(filmes));
}
function limparCampos(){
    document.getElementById("capa").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("lancamento").value = "";
    document.getElementById("produtora").value = "";
    document.getElementById("genero").value = "";
}