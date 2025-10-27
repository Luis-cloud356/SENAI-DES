const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/cliente.controllers");

router.get("/clientes", clientesController.listarClientes);
router.post("/cliente", clientesController.cadastrarCliente);
router.delete("/cliente/:id", clientesController.excluirCliente);

module.exports = router;