const express = require("express");
const router = express.Router();

const filmeController = require("../controllers/filme.controller");

router.get("/filmes", filmeController.listarFilmes);
router.get("/filme/:id", filmeController.buscarFilme);
router.post("/filme", filmeController.cadastrarFilme);
router.delete("/filme/:id", filmeController.excluirFilme);
router.put("/filme", filmeController.atualizarFilme);
router.get("/filme/categoria",filmeController.quantidadeLocacoesCategoria);
router.get("filme/faturamento", filmeController.faturamentoCategoria);

module.exports = router;