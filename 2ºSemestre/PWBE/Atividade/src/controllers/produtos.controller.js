const db = require("../data/connection");

const listarProduto = async (req, res) => {
    const lista = await db.query("SELECT * FROM produtos");
    res.json(lista[0]).end();
}

const buscarProduto = async (req, res) => {
    const idFilme = req.params.id;
    const filme = await db.query("SELECT * FROM produtos WHERE id = " + idFilme);
    res.json(filme[0][0]).end();
}

const cadastrarProduto = async (req, res) => {
    const {nome, quantidade, preco } = req.body;

    const novoProduto = await db.query("INSERT INTO produtos VALUES (DEFAULT, ?,?, ?)", [nome, preco,quantidade]);

    const produto = {
        id: novoProduto[0].insertId,
        nome: nome
    }

    res.json(produto).status(201).end();
}

const excluirProduto = async (req, res) => {
          const id = req.params.id;

          try {
                 const remove = await db.query("DELETE FROM produtos WHERE id = ?", [id]);

                 console.log(remove);

                 res.status(200).end();
          } catch(error) {
                    console.log(error);  

                    const err = { msg : "" };

                    if(error.errno === 1451) {
                            err.msg = "Produto já registrada";
                    }

                    res.status(500).json(err).end();
          }
};

const atualizarPrecoProduto = async (req, res) => {
    const {id, preco} = req.body;

    try {
         const update = await db.query("UPDATE produtos SET preco = ? WHERE id = ?", [ preco, id]);

         const info = {msg:""};

         if(update[0].affectedRows === 1) {
            info.msg = "Atualizado com Sucesso";
         }else if(update[0].affectedRows === 0) {
            info.msg = "Produto não encontrado";
         }

         res.status(200).json(info).end();
    }catch(error) {
        console.log(error);
        
        res.status(500).end();
    }
};

const alterarProduto = async (req, res) => {
        const {id, nome} = req.body;

    try {
         const update = await db.query("UPDATE produtos SET nome = ? WHERE id = ?", [ nome, id]);

         const info = {msg:""};

         if(update[0].affectedRows === 1) {
            info.msg = "Atualizado com Sucesso";
         }else if(update[0].affectedRows === 0) {
            info.msg = "Alteração não concluida";
         }

         res.status(200).json(info).end();
    }catch(error) {
        console.log(error);
        
        res.status(500).end();
    }
}

module.exports = {
     listarProduto,
     buscarProduto,
     cadastrarProduto,
     excluirProduto,
     atualizarPrecoProduto,
     alterarProduto
}   