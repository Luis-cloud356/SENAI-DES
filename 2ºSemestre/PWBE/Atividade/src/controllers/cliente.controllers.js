const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes");
    res.json(lista[0]).end();
}

const cadastrarCliente = async (req, res) => {
    const {nome, email, telefone, endereco } = req.body;

    const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT, ?, ?, ?, ?)", [nome, email, telefone, endereco]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }

    res.json(cliente).status(201).end();
}

const excluirCliente = async (req, res) => {
          const id = req.params.id;

          try {
                 const remove = await db.query("DELETE FROM clientes WHERE id = ?", [id]);

                 console.log(remove);

                 res.status(200).end();
          } catch(error) {
                    console.log(error);  

                    const err = { msg : "" };

                    if(error.errno === 1451) {
                            err.msg = "Usuario com locação registrada";
                    }

                    res.status(500).json(err).end();
          }
}

module.exports = {
     listarClientes,
     cadastrarCliente,
     excluirCliente
}