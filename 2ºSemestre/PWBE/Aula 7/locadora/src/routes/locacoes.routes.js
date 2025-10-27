const express = require("express");
const router = express.Router();

const locacoesController = require("../controllers/locacoes.controller");

router.get("/locacoes", locacoesController.listarLocacoes);
router.get("/locacao/:id", locacoesController.buscarLocacao);
router.post("/locacao", locacoesController.cadastrarLocacao);
router.delete("/locacao/:id", locacoesController.excluirLocacao);
router.put("/locacao", locacoesController.atualizarLocacao);
router.get("/locacoes/cliente/:idCliente", locacoesController.listarLocacoesIdCliente);
router.get("/locacoes/status/:status", locacoesController.listarLocacoesStatus);
router.get("/locacoes/faturamento", locacoesController.calcularTotalFaturamentoLocacao);
router.get("/locacoes/quantidade", locacoesController.faturamentoQuantidadeLocacoes);
module.exports = router;