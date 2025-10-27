const express = require("express");
const router = express.Router();

const PedidosController = require("../controllers/pedidos.controller");


router.get("/pedidos", PedidosController.listar);
router.get("/pedidos/:matricula", PedidosController.buscar);
router.post("/clientes", PedidosController.cadastrar);
router.put("/clientes", PedidosController.atualizar);


module.exports = router;