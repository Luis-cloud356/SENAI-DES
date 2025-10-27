const produtos = require("../data/produtos.data");



const buscar =(req, res) => {
    const id = req.params.id;

    var book = "";
    
    produtos.forEach((livro, index) => {
     if(livro.id === id){
        book = livro;
     }
    });

    if(book === "") book = "Não Encontrado";

    res.send(book).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    produtos.push = (data);
    res.status(201).send("Cadastro com Sucesso").end();
};

const apagar = (req, res) => {
    const id =req.params.id;

    var indice = -1;
};
const atualizar = (req, res) => {
    const product = req.body;

    var encontrei = false;


    produtos.forEach((produto, index) => {
       if(produto.matricula === product.matricula) {
        produtos[index] = product;
        encontrei = true;
       }
    });

    if(encontrei == false) {
        res.status (404).end();
    }else {
        res.status(201).end();
    }
};





module.exports = {
    buscar,
    cadastrar,
    apagar,
    atualizar
}