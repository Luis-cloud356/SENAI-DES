const db = require("../data/connection");

const listarVendas = async (req, res) => {
    try {
        const vendas = await db.query("SELECT * FROM vendas");
        res.json(vendas[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao listar vendas" });
    }
};

const buscarVendas = async (req, res) => {
    const { data_venda } = req.params;

    try {
        const vendas = await db.query("SELECT * FROM vendas WHERE data_venda = ?", [data_venda]);

        if (vendas[0].length === 0) {
            return res.status(404).json({ msg: "Nenhuma venda encontrada para a data especificada" });
        } 

        res.json(vendas[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar vendas" });
    }
};


const cadastrarVendas = async (req, res) => {
    const { produto_id, quantidade_vendida, data_venda } = req.body;

    try {
        const novaVenda = await db.query(
            "INSERT INTO vendas (id, id_produto, quantidade_vendida, data_venda) VALUES (DEFAULT,?, ?, ?)",
            [produto_id, quantidade_vendida, data_venda]
        );

        const vendaCadastrada = {
            id: novaVenda[0].insertId,
            produto: produto_id,
            quantidade:quantidade_vendida,
            data: data_venda
        };

        res.status(201).json(vendaCadastrada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar venda" });
    }
};


const apagarVendas = async (req, res) => {
    const { id } = req.params;

    try {
        const remove = await db.query("DELETE FROM vendas WHERE id = ?", [id]);

        if (remove[0].affectedRows === 0) {
            return res.status(404).json({ msg: "Venda não encontrada" });
        }

        res.status(200).json({ msg: "Venda excluída com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao excluir venda" });
    }
};


const atualizarVendas = async (req, res) => {
    const { id, produto_id, quantidade, data_venda } = req.body;

    try {
        const update = await db.query(
            "UPDATE vendas SET id_produto = ?, quantidade_vendida = ?, data_venda = ? WHERE id = ?",
            [produto_id, quantidade, data_venda, id]
        );

        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Venda atualizada com sucesso";
        } else if (update[0].affectedRows === 0) {
            info.msg = "Venda não encontrada";
        }

        res.status(200).json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar venda" });
    }
};

module.exports = {
    listarVendas,
    buscarVendas,
    apagarVendas,
    cadastrarVendas,
    atualizarVendas
};
