const express = require("express");
const router = express.Router();

const estoqueController = require("../controllers/estoque.controller");

router.get("/estoque", estoqueController.listarEstoque);

router.post("/estoque", estoqueController.cadastrarEstoque);

router.delete("/estoque/:id", estoqueController.excluirEstoque);

router.put("/estoque", estoqueController.atualizarEstoque);

module.exports = router;

