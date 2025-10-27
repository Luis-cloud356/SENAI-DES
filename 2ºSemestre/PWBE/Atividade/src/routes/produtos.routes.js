const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produtos.controller");

router.get("/produtos", produtoController.listarProduto);
router.get("/produto/:id", produtoController.buscarProduto);
router.post("/produto", produtoController.cadastrarProduto);
router.delete("/produto/:id", produtoController.excluirProduto);
router.put("/produto", produtoController.atualizarPrecoProduto);
router.get("/produto",produtoController.alterarProduto);

module.exports = router;