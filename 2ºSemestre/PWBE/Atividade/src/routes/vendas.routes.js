const express = require("express");
const router = express.Router();

const vendasController = require("../controllers/vendas.controllers");

router.get("/vendas", vendasController.listarVendas);
router.get("/venda/:data_venda", vendasController.buscarVendas);
router.delete("/venda/data_venda", vendasController.apagarVendas)
router.post("/venda", vendasController.cadastrarVendas);
router.put("/venda", vendasController.atualizarVendas);

module.exports = router;
