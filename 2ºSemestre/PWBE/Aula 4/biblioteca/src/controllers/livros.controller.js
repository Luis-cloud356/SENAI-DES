const livros = require("../data/livros.data");

const listar=(req, res) => {
    res,send(livros).end();
};

const buscar =(req, res) => {
    const id = req.params.id;

    var book = "";
    
    livros.forEach((livro, index) => {
     if(livro.id === id){
        book = livro;
     }
    });

    if(book === "") book = "Não Encontrado";

    res.send(book).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    livros.push = (data);
    res.status(201).send("Cadastro com Sucesso").end();
};

const apagar = (req, res) => {
    const id =req.params.id;

    var indice = -1;
}





module.exports = {
    listar
}