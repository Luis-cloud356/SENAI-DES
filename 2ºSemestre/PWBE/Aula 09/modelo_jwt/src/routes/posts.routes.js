const postsController = require("../controllers/posts.controller");

const express = require('express');

const validate = require("../middlewares/auth");
const {validaGerente, validaEditor} = require("../middlewares/validaCargo");
const postsRoutes = express.Router();

postsRoutes.post('/posts', validate, validaGerente, validaEditor, postsController.createpost);
postsRoutes.put('/atualizar', validate, validaEditor, validaGerente, postsController.editarPost);
postsRoutes.get('/listar/id', validate, validaEditor, validaGerente, postsController.listarPost);
postsRoutes.get('/posts/id', validate, validaEditor, validaGerente, postsController.verPostEspecifico);
postsRoutes.delete('/posts/id', validate, validaGerente, postsController.excluirPost);
module.exports = postsRoutes;