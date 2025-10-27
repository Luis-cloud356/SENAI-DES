
const db = require("../data/connection");

const listarEstoque = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM estoque");
        res.json(lista[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao listar estoque" });
    }
};

const cadastrarEstoque = async (req, res) => {
    const { produto_id, quantidade, data_entrada } = req.body;

    try {
        const novoEstoque = await db.query(
            "INSERT INTO estoque (produto_id, quantidade, data_entrada) VALUES (?, ?, ?)",
            [produto_id, quantidade, data_entrada]
        );

        const estoqueCadastrado = {
            id: novoEstoque[0].insertId,
            produto_id,
            quantidade,
            data_entrada
        };

        res.status(201).json(estoqueCadastrado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar estoque" });
    }
};

const excluirEstoque = async (req, res) => {
    const { id } = req.params;

    try {
        const remove = await db.query("DELETE FROM estoque WHERE id = ?", [id]);

        if (remove[0].affectedRows === 0) {
            return res.status(404).json({ msg: "Estoque não encontrado" });
        }

        res.status(200).json({ msg: "Estoque excluído com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao excluir estoque" });
    }
};


const atualizarEstoque = async (req, res) => {
    const { id, produto_id, quantidade, data_entrada } = req.body;

    try {
        const update = await db.query(
            "UPDATE estoque SET produto_id = ?, quantidade = ?, data_entrada = ? WHERE id = ?",
            [produto_id, quantidade, data_entrada, id]
        );

        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Estoque atualizado com sucesso";
        } else if (update[0].affectedRows === 0) {
            info.msg = "Estoque não encontrado";
        }

        res.status(200).json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar estoque" });
    }
};

module.exports = {
    listarEstoque,
    cadastrarEstoque,
    excluirEstoque,
    atualizarEstoque
};
