const dataPosts = require("../data/connection");

const createpost = async (req, res) => {
    try {
        const { titulo, conteudo } = req.body;
        const userId = req.headers['user'].id;

        const resultado = await dataPosts.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?)", [userId, titulo, conteudo]);

        const novoPost = {
            id: resultado[0].insertId,
            titulo: titulo,
            conteudo: conteudo
        };

        res.status(201).json(novoPost).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const editarPost = async (req, res) => {
    const { id, titulo, conteudo } = req.body;
    try {
        const update = await dataPosts.query("UPDATE posts SET titulo = ?, conteudo = ? WHERE id = ?", [titulo, conteudo, id]);
        res.status(201).json({
            msg: "Atualizado com Sucesso"
        }).end();
    } catch (error) {
        res.status(500).end();
    }
};

const listarPost = async (req, res) => {
    const lista = await dataPosts.query("SELECT * FROM posts");
    res.json(lista[0]).end();
};

const verPostEspecifico = async (req, res) => {
    try {
        const id = req.params.id;
        const ver = await dataPosts.query("SELECT * FROM posts  WHERE id = ?", [id]);
        res.status(201).send(ver).end();
    } catch (error) {
        res.status(401).json({
            msg: "Usuario nao encontrado"
        }).end();
    }
};

const excluirPost = async (req, res) => {
    const id = req.params.id;

    try {
        const remove = await dataPosts.query("DELETE FROM posts WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch (error) {
        res.status(500).json({
            msg: "Nao foi possivel excluir"
        }).end();
    }
};

const verPostsAutor = async (req, res) => {
    try {
        const id = req.params.id;
        const ver = await dataPosts.query("SELECT * FROM posts  WHERE user_id = ?", [id]);
        res.status(201).send(ver).end();
    } catch (error) {
        res.status(401).json({
            msg: "Autor nao encontrado"
        }).end();
    }
};

const totalPostsCadastrados = async (req, res) => {
    try {
        const total = await dataPosts.query("SELECT COUNT(*) FROM posts");
        res.send(total).status(200).end();
    }catch {
        res.status(500).json({
            msg: "Nao foi possivel calcular"
        }).end();
    }
}

module.exports = {
    createpost,
    editarPost,
    listarPost,
    verPostEspecifico,
    excluirPost,
    verPostsAutor,
    totalPostsCadastrados,
}